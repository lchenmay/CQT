// 将 HTML 中的 LaTeX 公式 ( \(...\) 和 \[...\] ) 渲染为内联 SVG
// 用法: node render-svg.cjs
const fs = require('fs');
const { mathjax } = require('mathjax-full/js/mathjax.js');
const { TeX } = require('mathjax-full/js/input/tex.js');
const { SVG } = require('mathjax-full/js/output/svg.js');
const { liteAdaptor } = require('mathjax-full/js/adaptors/liteAdaptor.js');
const { RegisterHTMLHandler } = require('mathjax-full/js/handlers/html.js');
const { AllPackages } = require('mathjax-full/js/input/tex/AllPackages.js');

// 初始化 MathJax
const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);

const tex = new TeX({
  packages: AllPackages,
  inlineMath: [['\\(', '\\)']],
  displayMath: [['\\[', '\\]']],
  processEscapes: false,
  processEnvironments: false,
});

const svgOutput = new SVG({
  fontCache: 'local',
});

const html = mathjax.document('', { InputJax: tex, OutputJax: svgOutput });

// 读取 HTML
const inputPath = '公众号文章-矩阵不是数组，而是完全二分图的权重-wx.html';
const outputPath = '公众号文章-矩阵不是数组，而是完全二分图的权重-wx-svg.html';
let content = fs.readFileSync(inputPath, 'utf-8');

// 收集所有公式，逐个渲染
let formulaCount = 0;

// 渲染块级公式 \[...\]
content = content.replace(/\\\[([\s\S]*?)\\\]/g, (match, latex) => {
  formulaCount++;
  const node = html.convert(latex.trim(), { display: true });
  const svg = adaptor.innerHTML(node);
  // 内联样式适配微信
  return `<span style="display:block;text-align:center;margin:1em 0;">${svg}</span>`;
});

// 渲染行内公式 \(...\)
content = content.replace(/\\\(([\s\S]*?)\\\)/g, (match, latex) => {
  formulaCount++;
  const node = html.convert(latex.trim(), { display: false });
  const svg = adaptor.innerHTML(node);
  // 内联样式，垂直居中对齐
  return `<span style="display:inline-block;vertical-align:middle;">${svg}</span>`;
});

fs.writeFileSync(outputPath, content, 'utf-8');
console.log(`完成！共渲染 ${formulaCount} 个公式 → ${outputPath}`);
