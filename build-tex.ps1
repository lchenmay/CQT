# build-tex.ps1
# LaTeX Workshop build wrapper (triggered by VSCode onSave).
# Only when the .tex source loads a music-related package (preamble-music / music.sty /
# \usepackage{...music}) do we inject --shell-escape via latexmk.
# Always use `latexmk -lualatex` (auto-runs biber + multiple passes); a single lualatex
# would leave bibliography references as "?"".
# ASCII-only on purpose (no BOM) so Windows PowerShell 5.1 parses it reliably.
#
# Robustness:
#  - Kill stale build processes for THIS document before starting (releases locked
#    music.log / music.bcf left behind by orphaned latexmk/perl/lualatex from a previous
#    interrupted build). This is self-healing: even if a cancelled build orphans its
#    children, the next save kills them before compiling.
#  - Remove leftover *-SAVE-ERROR files from a previous incomplete build.
#
# NOTE: latexmk is invoked via the `&` call operator (not Start-Process) so that the
# single-quoted `-e` argument is passed with its quotes intact (Start-Process drops them
# and breaks %O/%S substitution).

$ErrorActionPreference = 'Stop'

$texliveBin = 'C:\texlive\2026\bin\windows'
if ($env:PATH -notlike "*$texliveBin*") {
  $env:PATH = "$texliveBin;$env:PATH"
}

# %DOC%: LaTeX Workshop passes the main file path without extension
$Doc = $args[0]
if (-not $Doc) {
  Write-Error 'Missing argument: %DOC%'
  exit 1
}

$texFile = $Doc + '.tex'
$dir = Split-Path -Parent $Doc
$job = Split-Path -Leaf $Doc

# --- Kill stale build processes for this document (frees locked files) ---
function Kill-Stale {
  param($JobName, $DocPath)
  try {
    $procs = Get-CimInstance Win32_Process -ErrorAction SilentlyContinue | Where-Object {
      ($_.Name -match 'latexmk|perl|lualatex|luatex|lilypond|bibtex|biber') -and
      ($null -ne $_.CommandLine) -and
      (($_.CommandLine -like "*$JobName*") -or ($_.CommandLine -like "*$DocPath*"))
    }
    foreach ($p in $procs) {
      try { Stop-Process -Id $p.ProcessId -Force -ErrorAction SilentlyContinue } catch {}
    }
  } catch {}
}

Kill-Stale -JobName $job -DocPath $Doc

# Remove leftover -SAVE-ERROR files from a previous incomplete build
try {
  Get-ChildItem -Path $dir -Filter "$job-SAVE-ERROR*" -ErrorAction SilentlyContinue |
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
  if ($isMusic) {
    Write-Host '[build-tex] music package detected -> lualatex --shell-escape'
    & latexmk -lualatex -gg -synctex=1 -interaction=nonstopmode `
      -e '$lualatex = q/lualatex --shell-escape %O %S/;' $job
  } else {
    Write-Host '[build-tex] plain lualatex build (no shell-escape)'
    & latexmk -lualatex -gg -synctex=1 -interaction=nonstopmode $job
  }
  exit $LASTEXITCODE
}
finally {
  Pop-Location
}
