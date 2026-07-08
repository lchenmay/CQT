# CQT .tex 文件变更监听 + 自动 latexmk 编译 (v2 — 进程树安全版)
# 用法: powershell -File watch-compile.ps1
# 按 Ctrl+C 停止
#
# v2 改进:
#  - Start-Process + taskkill /T 替代 Start-Job（确保子进程 lualatex/biber 也被杀）
#  - 启动前自动清理上次会话残留的孤儿进程
#  - 编译前清理 *.synctex(busy) 脏文件
#  - 脚本退出时（含 VSCode 关闭）强制终止所有编译进程树

$ErrorActionPreference = "Stop"
$env:PATH = "C:\texlive\2026\bin\windows;$env:PATH"

$texRoot = "C:\Dev\CQT"
$debounceMs   = 2000   # 2秒防抖
$compileTimeoutSec = 60   # 60秒超时（正常编译 10-30s）

# ============================================================
# 工具函数
# ============================================================

function Kill-ProcessTree {
    param([int]$Pid)
    if ($Pid -le 0) { return }
    try {
        & taskkill /F /T /PID $Pid 2>&1 | Out-Null
    } catch { }
}

# 清理所有 TeX 相关孤儿进程（上次 VSCode 崩溃/关闭残留）
function Clear-AllTexOrphans {
    $names = @('lualatex', 'latexmk', 'biber', 'makeindex')
    $killedAny = $false
    foreach ($name in $names) {
        $procs = Get-Process -Name $name -ErrorAction SilentlyContinue
        foreach ($p in $procs) {
            Write-Host "  [孤儿清理] 终止 $($p.ProcessName) (PID $($p.Id))" -ForegroundColor DarkGray
            Kill-ProcessTree $p.Id
            $killedAny = $true
        }
    }
    if ($killedAny) { Write-Host "" }
    return $killedAny
}

# 清理目标目录下的脏中间文件
function Clear-DirtyFiles {
    param([string]$Dir)
    $busyFile = Join-Path $Dir "*.synctex(busy)"
    Get-ChildItem $busyFile -ErrorAction SilentlyContinue | ForEach-Object {
        Write-Host "  [脏文件清理] $($_.Name)" -ForegroundColor DarkGray
        Remove-Item $_.FullName -Force -ErrorAction SilentlyContinue
    }
}

# ============================================================
# 启动阶段 — 清理上次残留
# ============================================================

Write-Host "=== CQT LaTeX 文件监听器 v2 ===" -ForegroundColor Cyan
$hasOrphans = Clear-AllTexOrphans
if (-not $hasOrphans) { Write-Host "  (无残留进程)`n" }

Write-Host "监听目录: $texRoot"
Write-Host "防抖延迟: ${debounceMs}ms | 编译超时: ${compileTimeoutSec}s"
Write-Host "按 Ctrl+C 停止`n"

# ============================================================
# 状态变量
# ============================================================

$timers  = @{}                         # 防抖定时器: dir -> Timer
$running = @{}                         # 编译锁: dir -> $true/$false
$activePids = [System.Collections.Generic.List[int]]::new()  # 当前活跃编译的 PID
$lock = [object]::new()                # 并发锁

# 脚本退出时强制终止所有编译进程树（无论怎么退出）
$null = Register-EngineEvent PowerShell.Exiting -Action {
    foreach ($pid in $activePids) {
        try { & taskkill /F /T /PID $pid 2>&1 | Out-Null } catch { }
    }
}

# ============================================================
# 文件系统监听器
# ============================================================

$watcher = [System.IO.FileSystemWatcher]::new($texRoot, "*.tex")
$watcher.IncludeSubdirectories = $true
$watcher.NotifyFilter = [System.IO.NotifyFilters]::LastWrite
$watcher.EnableRaisingEvents = $true

$onChanged = {
    $path = $Event.SourceEventArgs.FullPath

    # 跳过中间/临时文件（防止编译产物触发二次编译循环）
    if ($path -match '\.(aux|bbl|bcf|blg|log|out|toc|run\.xml|synctex)\.tex$') { return }

    $dir = Split-Path $path -Parent
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] 检测变更: $path" -ForegroundColor Yellow

    # ---- 防抖: 取消同目录之前的计时器，重新2秒倒计时 ----
    [System.Threading.Monitor]::Enter($lock)
    try {
        if ($script:timers.ContainsKey($dir)) {
            $script:timers[$dir].Dispose()
        }
        $timer = [System.Timers.Timer]::new($script:debounceMs)
        $timer.AutoReset = $false
        $timer.Enabled = $true

        $dirCopy = $dir
        $timer.add_Elapsed({
            # ---- 重叠保护: 同目录上一次编译未完成则跳过 ----
            [System.Threading.Monitor]::Enter($script:lock)
            if ($script:running.ContainsKey($dirCopy) -and $script:running[$dirCopy]) {
                [System.Threading.Monitor]::Exit($script:lock)
                return
            }
            $script:running[$dirCopy] = $true
            [System.Threading.Monitor]::Exit($script:lock)

            $texName = "$(Split-Path $dirCopy -Leaf).tex"
            Write-Host "[$(Get-Date -Format 'HH:mm:ss')] 编译中: $dirCopy\$texName" -ForegroundColor Green

            # ---- 编译前清理 ----
            Clear-DirtyFiles $dirCopy

            $outFile = [System.IO.Path]::GetTempFileName()
            $errFile = [System.IO.Path]::GetTempFileName()
            $proc = $null

            try {
                # 启动 latexmk（使用 Start-Process 获取进程句柄，以便必要时 taskkill /T）
                $proc = Start-Process -FilePath "latexmk" `
                    -ArgumentList "-lualatex", "-quiet",
                                  "-latexoption=-interaction=nonstopmode",
                                  $texName `
                    -WorkingDirectory $dirCopy `
                    -WindowStyle Hidden `
                    -PassThru `
                    -RedirectStandardOutput $outFile `
                    -RedirectStandardError $errFile

                $script:activePids.Add($proc.Id)

                # 等待编译完成（带超时）
                $hasExited = $proc.WaitForExit($script:compileTimeoutSec * 1000)

                if (-not $hasExited) {
                    # 超时 → 杀整个进程树（latexmk → lualatex → biber → …）
                    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] 编译超时(${compileTimeoutSec}s)，强制终止进程树 PID $($proc.Id)" -ForegroundColor Red
                    Kill-ProcessTree $proc.Id
                    Start-Sleep -Milliseconds 500  # 给系统一点时间回收
                }

                # 读取编译输出，提取 Warning/Error
                if (Test-Path $outFile) {
                    $result = Get-Content $outFile -ErrorAction SilentlyContinue
                    $warnings = ($result | Where-Object { $_ -match 'Warning|Error' })
                    if ($warnings) {
                        Write-Host ($warnings -join "`n") -ForegroundColor DarkYellow
                    }
                }

                if ($hasExited) {
                    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] 编译完成: $dirCopy`n" -ForegroundColor Green
                }
            } catch {
                Write-Host "[$(Get-Date -Format 'HH:mm:ss')] 编译异常: $dirCopy -- $_" -ForegroundColor Red
            } finally {
                # 释放资源
                if ($proc) { $script:activePids.Remove($proc.Id) }
                Remove-Item $outFile, $errFile -ErrorAction SilentlyContinue

                [System.Threading.Monitor]::Enter($script:lock)
                $script:running[$dirCopy] = $false
                [System.Threading.Monitor]::Exit($script:lock)
            }
        })

        $script:timers[$dir] = $timer
    } finally {
        [System.Threading.Monitor]::Exit($lock)
    }
}

$eventJob = Register-ObjectEvent -InputObject $watcher -EventName Changed -Action $onChanged

Write-Host "监听已启动，等待 .tex 文件变更...`n"

# ============================================================
# 主循环
# ============================================================

try {
    while ($true) { Start-Sleep -Seconds 5 }
} finally {
    # ---- 退出前强制终止所有残留编译进程树 ----
    foreach ($pid in $activePids) {
        Write-Host "[关闭] 终止编译进程树 PID $pid" -ForegroundColor Yellow
        Kill-ProcessTree $pid
    }

    Unregister-Event -SourceIdentifier $eventJob.Name -ErrorAction SilentlyContinue
    $watcher.Dispose()
    Write-Host "监听器已停止" -ForegroundColor Cyan
}
