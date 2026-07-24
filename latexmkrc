# CQT 全局 latexmk 配置
# 允许 shell-escape：lyluatex（调用 lilypond）与 minted 等需要外部程序
$lualatex = 'lualatex %O -shell-escape %S';
$pdflatex = 'pdflatex %O -shell-escape %S';
