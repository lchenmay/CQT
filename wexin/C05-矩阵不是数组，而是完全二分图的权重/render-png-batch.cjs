// 批量将 LaTeX 公式渲染为 PNG (base64)，使用 Playwright + MathJax
// 优化：每个公式作为独立 mjx-container，一次性渲染所有公式
// 用法: node render-png-batch.cjs
const fs = require('fs');
const { chromium } = require('playwright');

async function main() {
  const inputPath = '公众号文章-矩阵不是数组，而是完全二分图的权重-wx.html';
  const outputPath = '公众号文章-矩阵不是数组，而是完全二分图的权重-wx-png.html';
  
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

  console.log(`共找到 ${formulas.length} 个公式（${formulas.filter(f=>f.display).length} 块级 + ${formulas.filter(f=>!f.display).length} 行内）`);

  // 构建一个包含所有公式的 HTML 页面
  // 每个公式放在独立的 <div> 容器中，有唯一 ID
  let htmlParts = [];
  for (let i = 0; i < formulas.length; i++) {
    const f = formulas[i];
    const latexStr = f.display ? `\\[${f.latex}\\]` : `\\(${f.latex}\\)`;
    const style = f.display ? 'display:block;text-align:center;margin:8px 0;' : 'display:inline-block;';
    htmlParts.push(`<div id="f${i}" style="${style}">${latexStr}</div>`);
  }

  const batchHtml = `<!DOCTYPE html><html><head>
<meta charset="utf-8">
<script>
MathJax = {
  tex: {
    inlineMath: [['\\\\(', '\\\\)']],
    displayMath: [['\\\\[', '\\\\]']]
  },
  svg: { fontCache: 'local' }
};
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
<style>
body { margin: 0; padding: 10px; background: white; font-size: 17px; }
</style>
</head><body>
${htmlParts.join('\n')}
</body></html>`;

  // 写入临时文件
  fs.writeFileSync('_batch_render.html', batchHtml, 'utf-8');
  console.log(`批量渲染 HTML 已生成，${batchHtml.length} 字节`);

  // 启动浏览器
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto(`file://${__dirname}/_batch_render.html`, { waitUntil: 'networkidle' });
  
  // 等待 MathJax 渲染所有公式
  await page.waitForFunction(() => {
    return typeof MathJax !== 'undefined' && MathJax.startup && MathJax.startup.document && MathJax.startup.document.outputJax;
  }, { timeout: 30000 });
  
  // 额外等待渲染完成
  await page.waitForTimeout(2000);

  const pngCache = {};
  let successCount = 0;
  let skipCount = 0;

  for (let i = 0; i < formulas.length; i++) {
    const f = formulas[i];
    const cacheKey = f.latex + (f.display ? '_d' : '_i');
    
    if (pngCache[cacheKey]) {
      skipCount++;
      if (skipCount <= 5) console.log(`  [${i + 1}/${formulas.length}] cached: ${f.latex.substring(0, 40)}`);
      continue;
    }

    const mjxContainer = await page.$(`#f${i} mjx-container`);
    if (mjxContainer) {
      const box = await mjxContainer.boundingBox();
      if (box && box.width > 0 && box.height > 0) {
        const buffer = await mjxContainer.screenshot({ type: 'png' });
        const base64 = buffer.toString('base64');
        pngCache[cacheKey] = { base64, width: Math.ceil(box.width), height: Math.ceil(box.height) };
        successCount++;
        if (successCount <= 5) console.log(`  [${i + 1}/${formulas.length}] OK (${Math.ceil(box.width)}x${Math.ceil(box.height)}) ${f.latex.substring(0, 40)}`);
      } else {
        skipCount++;
        console.log(`  [${i + 1}/${formulas.length}] SKIP (zero size) ${f.latex.substring(0, 40)}`);
      }
    } else {
      skipCount++;
      console.log(`  [${i + 1}/${formulas.length}] SKIP (no mjx) ${f.latex.substring(0, 40)}`);
    }
  }

  console.log(`\n渲染完成: ${successCount} 成功, ${skipCount} 跳过/缓存, 唯一公式 ${Object.keys(pngCache).length}`);

  await browser.close();

  // 替换占位符为 PNG img 标签
  for (const f of formulas) {
    const cacheKey = f.latex + (f.display ? '_d' : '_i');
    const cached = pngCache[cacheKey];
    
    if (cached) {
      const imgTag = f.display
        ? `<span style="display:block;text-align:center;margin:1em 0;"><img src="data:image/png;base64,${cached.base64}" style="width:${cached.width}px;height:${cached.height}px;max-width:100%;" alt=""></span>`
        : `<img src="data:image/png;base64,${cached.base64}" style="width:${cached.width}px;height:${cached.height}px;vertical-align:middle;display:inline-block;" alt="">`;
      
      content = content.replace(f.placeholder, imgTag);
    } else {
      // 渲染失败，回退为纯文本
      content = content.replace(f.placeholder, `$${f.latex}$`);
    }
  }

  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`\n输出: ${outputPath} (${(fs.statSync(outputPath).size / 1024).toFixed(0)} KB)`);

  // 清理临时文件
  fs.unlinkSync('_batch_render.html');
}

main().catch(err => { console.error(err); process.exit(1); });
