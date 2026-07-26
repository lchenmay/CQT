# build-tex.ps1
# LaTeX Workshop build wrapper (triggered by VSCode onSave).
# Only when the .tex source loads a music-related package (preamble-music / music.sty /
# \usepackage{...music}) do we inject --shell-escape via latexmk.
# Always use `latexmk -lualatex` (auto-runs biber + multiple passes); a single lualatex
# would leave bibliography references as "?".
# ASCII-only on purpose (no BOM) so Windows PowerShell 5.1 parses it reliably.
#
# Robustness:
#  - SELF-CONTAINED PATH: lualatex (TeX Live), lilypond and ghostscript are all added to
#    PATH here explicitly. The VSCode tool runs `powershell -File` (no profile), so the
#    user's LilyPond/Ghostscript (installed via WinGet into %LOCALAPPDATA%) would NOT be
#    on PATH otherwise -> lyluatex's shell-escape call to `lilypond` fails -> build fails.
#    Adding them here makes the build independent of the launcher's environment.
#  - Kill stale build processes for THIS document before starting (releases locked
#    music.log / music.bcf left behind by orphaned latexmk/perl/lualatex from a previous
#    interrupted build). Kills the WHOLE process tree (parent + children).
#  - Remove leftover *-SAVE-ERROR files from a previous incomplete build.
#  - Clean exit code: PowerShell's $ErrorActionPreference is left at default so a native
#    command's stderr (latexmk/lualatex warnings) does NOT abort the script; the real
#    latexmk exit code is returned so LaTeX Workshop reports success/failure correctly.
#
# NOTE: latexmk is invoked via the `&` call operator (not Start-Process) so that the
# single-quoted `-e` argument is passed with its quotes intact (Start-Process drops them
# and breaks %O/%S substitution).

function Add-PathDir {
  param([string]$Dir)
  if ($Dir -and (Test-Path $Dir) -and ($env:PATH -notlike "*$Dir*")) {
    $env:PATH = "$Dir;$($env:PATH)"
  }
}

# --- TeX Live (lualatex / latexmk / biber / makeindex) ---
$texliveBin = 'C:\texlive\2026\bin\windows'
Add-PathDir $texliveBin

# --- LilyPond (lyluatex shell-escapes to `lilypond` to render score snippets) ---
$lilyBin = Get-ChildItem -Path "$env:LOCALAPPDATA\Microsoft\WinGet\Packages" `
  -Filter lilypond.exe -Recurse -ErrorAction SilentlyContinue -Depth 5 |
  Select-Object -First 1 -ExpandProperty DirectoryName
if (-not $lilyBin) {
  $lilyBin = 'C:\Users\RR\AppData\Local\Microsoft\WinGet\Packages\LilyPond.LilyPond_Microsoft.Winget.Source_8wekyb3d8bbwe\lilypond-2.24.4\bin'
}
Add-PathDir $lilyBin

# --- Ghostscript (lyluatex may invoke `gs` for some conversions) ---
$gsBin = Get-ChildItem -Path 'C:\Program Files\gs' `
  -Filter gswin64c.exe -Recurse -ErrorAction SilentlyContinue -Depth 3 |
  Select-Object -First 1 -ExpandProperty DirectoryName
Add-PathDir $gsBin

# %DOC%: LaTeX Workshop passes the main file path without extension, but be tolerant
# if it ever arrives with a .tex suffix.
$Doc = $args[0]
if (-not $Doc) {
  Write-Error 'Missing argument: %DOC%'
  exit 1
}
if ($Doc -match '\.tex$') { $Doc = $Doc -replace '\.tex$', '' }

$texFile = $Doc + '.tex'
$dir = Split-Path -Parent $Doc
$job = Split-Path -Leaf $Doc

# Record the script start time so Kill-Stale can tell OLD (previous build) processes
# from the FRESH ones we are about to launch. Without this guard, a second save's
# Kill-Stale would match its own in-flight latexmk/lualatex (their command lines also
# contain the job name / doc path) and kill the very build it just started -> half-written
# files, no .log, confusing "build error".
$scriptStart = Get-Date

# --- Kill stale build processes for THIS document (frees locked files) ---
# Must kill the WHOLE process tree: latexmk/perl spawn lualatex/lilypond as children,
# and a plain Stop-Process on the parent leaves the child holding music.log / music.bcf.
# taskkill /T /F terminates the tree recursively so no orphan keeps the file locked.
# GUARD: only kill processes created BEFORE this script started, so we never kill the
# build we are about to launch (its command line matches the same patterns).
function Kill-Stale {
  param($JobName, $DocPath)
  try {
    $procs = Get-CimInstance Win32_Process -ErrorAction SilentlyContinue | Where-Object {
      ($_.Name -match 'latexmk|perl|lualatex|luatex|lilypond|bibtex|biber|gswin64c|gs') -and
      ($null -ne $_.CommandLine) -and
      (($_.CommandLine -like "*$JobName*") -or ($_.CommandLine -like "*$DocPath*")) -and
      ($null -ne $_.CreationDate) -and
      (([Management.ManagementDateTimeConverter]::ToDateTime($_.CreationDate)) -lt $scriptStart)
    }
    foreach ($p in $procs) {
      try { taskkill.exe /PID $p.ProcessId /T /F 2>$null } catch {}
      try { Stop-Process -Id $p.ProcessId -Force -ErrorAction SilentlyContinue } catch {}
    }
  } catch {}
}

Kill-Stale -JobName $job -DocPath $Doc
# Give the OS a moment to release the file handles before latexmk writes again.
Start-Sleep -Milliseconds 600

# Remove leftover -SAVE-ERROR files from a previous incomplete build.
# latexmk names these like "<job>.bbl-SAVE-ERROR" (the aux name, not the job name), so we
# must match the trailing "*-SAVE-ERROR" glob rather than "$job-SAVE-ERROR".
try {
  Get-ChildItem -Path $dir -Filter '*-SAVE-ERROR*' -ErrorAction SilentlyContinue |
    Remove-Item -Force -ErrorAction SilentlyContinue
} catch {}

if (-not (Test-Path $texFile)) {
  Write-Error "Source file not found: $texFile"
  exit 1
}

$src = Get-Content -Path $texFile -Raw
$isMusic = $src -match 'preamble-music|\\usepackage\{[^\}]*music|music\.sty'

Push-Location $dir
try {
  # latexmk 结束时总往 stderr 打印 "Reverting Windows console CPs..."，
  # 若不重定向，PowerShell 会把它当成终止性 NativeCommandError，
  # 使脚本即便编译成功也以非零码退出（LaTeX Workshop 误报 "Recipe terminated with error"）。
  # 故将 stderr 导入临时文件；仅当 latexmk 真正失败时再回显。
  $errLog = Join-Path $env:TEMP ('latexmk-' + [System.IO.Path]::GetFileNameWithoutExtension($texFile) + '.err')
  if ($isMusic) {
    Write-Host '[build-tex] music package detected -> lualatex --shell-escape'
    if (-not (Test-Path (Join-Path $lilyBin 'lilypond.exe'))) {
      Write-Warning ('[build-tex] LilyPond not found under ' + $lilyBin + ' -- lyluatex cannot render scores; relying on PATH / cached snippets')
    } else {
      Write-Host ('[build-tex] lilypond: ' + $lilyBin)
    }
    & latexmk -lualatex -synctex=1 -interaction=nonstopmode `
      -e '$lualatex = q/lualatex --shell-escape %O %S/;' $job 2> $errLog
  } else {
    Write-Host '[build-tex] plain lualatex build (no shell-escape)'
    & latexmk -lualatex -synctex=1 -interaction=nonstopmode $job 2> $errLog
  }
  $rc = $LASTEXITCODE
  if ($rc -ne 0 -and (Test-Path $errLog)) {
    Write-Warning ('[build-tex] latexmk exited with code ' + $rc + '; stderr below:')
    Get-Content $errLog | Write-Host
  }
  exit $rc
}
finally {
  Pop-Location
}
