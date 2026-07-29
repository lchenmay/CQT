import pathlib
d = pathlib.Path(r'c:\Dev\CQT\weixin\C06-张量的前世今生')
html = (d / 'index.html').read_text(encoding='utf-8')
mj = (d / 'mathjax-tex-svg.js').read_text(encoding='utf-8')
cdn = '<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>'
assert cdn in html, 'MathJax CDN tag not found'
html = html.replace(cdn, '<script>' + mj + '</script>')
out = d / '张量的前世今生-单文件.html'
out.write_text(html, encoding='utf-8')
print('written', out.stat().st_size, 'bytes')
assert 'images/' not in html, 'still references images/'
print('no external image refs - fully self-contained')
