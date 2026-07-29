// 将 HTML 中的 LaTeX 公式渲染为 PNG (base64) 嵌入
// 原理: MathJax → SVG → 用 puppeteer 截图 → PNG base64
// 用法: node render-png.cjs
const fs = require('fs');
const { chromium } = require('playwright');

async function main() {
  const inputPath = '公众号文章-复数化的概率-wx.html';
  const outputPath = '公众号文章-复数化的概率-wx-png.html';
  
  let content = fs.readFileSync(inputPath, 'utf-8');

  // 提取所有公式
  const formulas = [];
  let formulaCount = 0;

  // 块级公式 \[...\]
  content = content.replace(/\\\[([\s\S]*?)\\\]/g, (match, latex) => {
    const id = formulaCount++;
    formulas.push({ id, latex: latex.trim(), display: true, placeholder: `__FORMULA_${id}__` });
    return `__FORMULA_${id}__`;
  });

  // 行内公式 \(...\)
  content = content.replace(/\\\(([\s\S]*?)\\\)/g, (match, latex) => {
    const id = formulaCount++;
    formulas.push({ id, latex: latex.trim(), display: false, placeholder: `__FORMULA_${id}__` });
    return `__FORMULA_${id}__`;
  });

  console.log(`共找到 ${formulas.length} 个公式，开始渲染 PNG...`);

  // 用 Playwright 渲染每个公式为 PNG
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // 加载 MathJax 的 HTML 页面模板
  const template = `<!DOCTYPE html><html><head>
<script>MathJax={tex:{inlineMath:[['\\\\(','\\\\)']],displayMath:[['\\\\[','\\\\]']]},svg:{fontCache:'local'}};</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
<style>body{margin:0;padding:0;background:white;font-size:17px;}mjx-container{display:inline-block;}</style></head><body>__LATEX__</body></html>`;

  const pngCache = {};

  for (let i = 0; i < formulas.length; i++) {
    const f = formulas[i];
    const cacheKey = f.latex + (f.display ? '_d' : '_i');
    
    if (pngCache[cacheKey]) {
      console.log(`  [${i + 1}/${formulas.length}] (cached) ${f.latex.substring(0, 30)}`);
      continue;
    }

    const latexStr = f.display ? `\\[${f.latex}\\]` : `\\(${f.latex}\\)`;
    const htmlContent = template.replace('__LATEX__', latexStr);
    
    await page.setContent(htmlContent, { waitUntil: 'networkidle' });
    // 等待 MathJax 渲染完成
    await page.waitForTimeout(800);

    // 截图 SVG 元素
    const mjxContainer = await page.$('mjx-container');
    if (mjxContainer) {
      const box = await mjxContainer.boundingBox();
      if (box && box.width > 0 && box.height > 0) {
        const buffer = await mjxContainer.screenshot({ type: 'png' });
        const base64 = buffer.toString('base64');
        pngCache[cacheKey] = { base64, width: Math.ceil(box.width), height: Math.ceil(box.height) };
        console.log(`  [${i + 1}/${formulas.length}] OK (${Math.ceil(box.width)}x${Math.ceil(box.height)}) ${f.latex.substring(0, 30)}`);
      } else {
        console.log(`  [${i + 1}/${formulas.length}] SKIP (zero size) ${f.latex.substring(0, 30)}`);
      }
    } else {
      console.log(`  [${i + 1}/${formulas.length}] SKIP (no container) ${f.latex.substring(0, 30)}`);
    }
  }

  await browser.close();

  // 替换占位符为 PNG img 标签
  for (const f of formulas) {
    const cacheKey = f.latex + (f.display ? '_d' : '_i');
    const cached = pngCache[cacheKey];
    
    if (cached) {
      const imgTag = f.display
        ? `<span style="display:block;text-align:center;margin:1em 0;"><img src="data:image/png;base64,${cached.base64}" style="width:${cached.width}px;height:${cached.height}px;" alt=""></span>`
        : `<img src="data:image/png;base64,${cached.base64}" style="width:${cached.width}px;height:${cached.height}px;vertical-align:middle;display:inline-block;" alt="">`;
      
      content = content.replace(f.placeholder, imgTag);
    } else {
      // 渲染失败，保留原始 LaTeX
      content = content.replace(f.placeholder, `$${f.latex}$`);
    }
  }

  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`\n完成！输出: ${outputPath}`);
  console.log(`唯一公式数: ${Object.keys(pngCache).length}, 总占位: ${formulas.length}`);
}

main().catch(err => { console.error(err); process.exit(1); });
