# CQT .tex 文件变更监听 + 自动 latexmk 编译
# 用法: powershell -File watch-compile.ps1
# 按 Ctrl+C 停止

$ErrorActionPreference = "Stop"
$env:PATH = "C:\texlive\2026\bin\windows;$env:PATH"

$texRoot = "C:\Dev\CQT"
$debounceMs = 2000  # 2秒防抖

Write-Host "=== CQT LaTeX 文件监听器 ===" -ForegroundColor Cyan
Write-Host "监听目录: $texRoot" 
Write-Host "防抖延迟: ${debounceMs}ms"
Write-Host "按 Ctrl+C 停止`n"

# 用于防抖的 hashtable: file_path -> timer
$timers = @{}
$lock = [object]::new()

$watcher = [System.IO.FileSystemWatcher]::new($texRoot, "*.tex")
$watcher.IncludeSubdirectories = $true
$watcher.NotifyFilter = [System.IO.NotifyFilters]::LastWrite
$watcher.EnableRaisingEvents = $true

$onChanged = {
    $path = $Event.SourceEventArgs.FullPath
    
    # 跳过临时/中间文件
    if ($path -match '\.(aux|bbl|bcf|blg|log|out|toc|run\.xml|synctex)\.tex$') { return }
    
    $dir = Split-Path $path -Parent
    
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] 检测变更: $path" -ForegroundColor Yellow
    
    # 防抖: 取消该目录之前的计时器，重新开始计时
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
            Write-Host "[$(Get-Date -Format 'HH:mm:ss')] 编译: $dirCopy" -ForegroundColor Green
            try {
                Push-Location $dirCopy
                $result = latexmk -lualatex -quiet "$(Split-Path $dirCopy -Leaf).tex" 2>&1
                $warnings = ($result | Where-Object { $_ -match 'Warning|Error' })
                if ($warnings) {
                    Write-Host ($warnings -join "`n") -ForegroundColor DarkYellow
                }
                Write-Host "[$(Get-Date -Format 'HH:mm:ss')] 完成: $dirCopy`n" -ForegroundColor Green
            } catch {
                Write-Host "[$(Get-Date -Format 'HH:mm:ss')] 编译失败: $dirCopy -- $_" -ForegroundColor Red
            } finally {
                Pop-Location
            }
        })
        $script:timers[$dir] = $timer
    } finally {
        [System.Threading.Monitor]::Exit($lock)
    }
}

$job = Register-ObjectEvent -InputObject $watcher -EventName Changed -Action $onChanged

Write-Host "监听已启动，等待 .tex 文件变更...`n"

# 保持运行
try {
    while ($true) {
        Start-Sleep -Seconds 5
    }
} finally {
    Unregister-Event -SourceIdentifier $job.Name -ErrorAction SilentlyContinue
    $watcher.Dispose()
    Write-Host "监听器已停止" -ForegroundColor Cyan
}
