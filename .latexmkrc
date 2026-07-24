# 注意：不要在此处全局启用 --shell-escape。
# 仅加载 music 宏包的 .tex 才需要 shell-escape，由 build-tex.ps1 在编译时条件注入；
# music 章节目录（如 011-music）的本地 .latexmkrc 也保留了 shell-escape 作为兜底。
$pdf_mode = 4;
