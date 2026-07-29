// 批量将 LaTeX 公式渲染为 PNG (base64)，使用 Playwright + MathJax
// v2: 修复单字符公式截图过窄的问题 —— 用 clip: false + 更大视口
// 用法: node render-png-v2.cjs
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

  console.log(`共找到 ${formulas.length} 个公式（${formulas.filter(f=>f.display).length} 块级 + ${formulas.filter(f=>!f.display).length} 行内）`);

  // 构建渲染页面 —— 每个公式包裹在带 padding 的容器中
  let htmlParts = [];
  for (let i = 0; i < formulas.length; i++) {
    const f = formulas[i];
    const latexStr = f.display ? `\\[${f.latex}\\]` : `\\(${f.latex}\\)`;
    // 行内公式加最小宽度和 padding 防止截图裁剪
    const padding = f.display ? 'padding:8px;' : 'padding:2px 8px;min-width:30px;';
    htmlParts.push(`<div id="f${i}" style="${padding}display:inline-block;vertical-align:middle;">${latexStr}</div>`);
  }

  const batchHtml = `<!DOCTYPE html><html><head>
<meta charset="utf-8">
<script>
MathJax = {
  tex: {
    inlineMath: [['\\\\(', '\\\\)']],
    displayMath: [['\\\\[', '\\\\]']]
  },
  svg: { fontCache: 'local', scale: 1.0 }
};
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
<style>
body { margin: 0; padding: 10px; background: white; font-size: 17px; }
</style>
</head><body>
${htmlParts.join('\n')}
</body></html>`;

  fs.writeFileSync('_batch_render.html', batchHtml, 'utf-8');
  console.log(`批量渲染 HTML 已生成，${batchHtml.length} 字节`);

  // 启动浏览器
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  // 设置较大视口，确保公式不会被 viewport 裁剪
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  await page.goto(`file://${__dirname}/_batch_render.html`, { waitUntil: 'networkidle' });
  
  // 等待 MathJax 渲染
  await page.waitForFunction(() => {
    return typeof MathJax !== 'undefined' && MathJax.startup && MathJax.startup.document;
  }, { timeout: 30000 });
  
  await page.waitForTimeout(3000);

  const pngCache = {};
  let successCount = 0;
  let skipCount = 0;

  for (let i = 0; i < formulas.length; i++) {
    const f = formulas[i];
    const cacheKey = f.latex + (f.display ? '_d' : '_i');
    
    if (pngCache[cacheKey]) {
      skipCount++;
      continue;
    }

    // 找到包裹 div，直接对包裹 div 截图（包含 padding）
    const container = await page.$(`#f${i}`);
    if (container) {
      const box = await container.boundingBox();
      if (box && box.width > 0 && box.height > 0) {
        // 使用 clip: false 避免裁剪，确保完整截取
        const buffer = await container.screenshot({ 
          type: 'png',
          clip: undefined  // 不用 clip，对整个元素截图
        });
        const base64 = buffer.toString('base64');
        
        // 对行内公式确保最小宽度
        const finalWidth = Math.max(Math.ceil(box.width), f.display ? 0 : 30);
        pngCache[cacheKey] = { base64, width: finalWidth, height: Math.ceil(box.height) };
        successCount++;
        if (successCount <= 10) console.log(`  [${i + 1}/${formulas.length}] OK (${finalWidth}x${Math.ceil(box.height)}) ${f.latex.substring(0, 50)}`);
      } else {
        skipCount++;
        console.log(`  [${i + 1}/${formulas.length}] SKIP (zero size) ${f.latex.substring(0, 40)}`);
      }
    } else {
      skipCount++;
      console.log(`  [${i + 1}/${formulas.length}] SKIP (no element) ${f.latex.substring(0, 40)}`);
    }
  }

  console.log(`\n渲染完成: ${successCount} 成功, ${skipCount} 跳过/缓存, 唯一公式 ${Object.keys(pngCache).length}`);

  await browser.close();

  // 替换占位符
  let fallbackCount = 0;
  for (const f of formulas) {
    const cacheKey = f.latex + (f.display ? '_d' : '_i');
    const cached = pngCache[cacheKey];
    
    if (cached) {
      const imgTag = f.display
        ? `<span style="display:block;text-align:center;margin:1em 0;"><img src="data:image/png;base64,${cached.base64}" style="width:${cached.width}px;height:${cached.height}px;max-width:100%;" alt=""></span>`
        : `<img src="data:image/png;base64,${cached.base64}" style="width:${cached.width}px;height:${cached.height}px;vertical-align:middle;display:inline-block;" alt="">`;
      
      content = content.replace(f.placeholder, imgTag);
    } else {
      fallbackCount++;
      content = content.replace(f.placeholder, `$${f.latex}$`);
    }
  }

  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`\n输出: ${outputPath} (${(fs.statSync(outputPath).size / 1024).toFixed(0)} KB)`);
  console.log(`Fallback: ${fallbackCount}`);

  // 清理
  fs.unlinkSync('_batch_render.html');
}

main().catch(err => { console.error(err); process.exit(1); });
