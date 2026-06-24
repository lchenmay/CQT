// Scrape all zhihu column articles content via playwright
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// List of all known article URLs from the column
const articles = [
  { id: 'MP19', url: 'https://zhuanlan.zhihu.com/p/44776557', title: 'MP19：拓扑加油站(1)：道路连通、同伦、基本群' }, // from MP22 page - it references MP19
  { id: 'MP22', url: 'https://zhuanlan.zhihu.com/p/44776557', title: 'MP22：同调群' },
  { id: 'MP23', url: 'https://zhuanlan.zhihu.com/p/45703308', title: 'MP23：张量积、张量、张量丛' },
  { id: 'MP25', url: 'https://zhuanlan.zhihu.com/p/45777678', title: 'MP25：力学与电磁学中的外微分(1)：镜像、极/轴向量、叉乘、nabla算子/外微分算子' },
  { id: 'MP70', url: 'https://zhuanlan.zhihu.com/p/51659498', title: 'MP70：典型群(4)：Lie群的同伦' },
  { id: 'MP109', url: 'https://zhuanlan.zhihu.com/p/57871599', title: 'MP109：Lorentz群表示论(6)：Lie群的中心扩张' },
  // Articles from the recent batch (already known URLs from previous analysis)
  { id: 'MP143', url: null, title: 'MP143：从向量丛到上同调(3)：用反变Hom函子构造上同调' },
  { id: 'MP144', url: null, title: 'MP144：从向量丛到上同调(4)：群上同调' },
  { id: 'MP145', url: null, title: 'MP145：从微分几何到代数几何(6)：有理函数域' },
  { id: 'MP146', url: null, title: 'MP146：从向量丛到上同调(5)：群代数' },
  { id: 'MP147', url: null, title: 'MP147：从向量丛到上同调(6)：群上的模范畴' },
  { id: 'MP148', url: null, title: 'MP148：数论(1)：扩域' },
  { id: 'MP149', url: null, title: 'MP149：数论(2)：Galois群' },
];

// First, open the column guide page to get all links
const outDir = path.join(__dirname, 'articles');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function run(cmd) {
  console.log(`> ${cmd}`);
  const result = execSync(cmd, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
  console.log(result.substring(0, 200));
  return result;
}

try {
  // Open browser and navigate to column guide page
  run(`playwright-cli open --browser=chrome https://zhuanlan.zhihu.com/p/44016474`);
  
  // Wait for page to load
  execSync('timeout /t 3 /nobreak >nul', { encoding: 'utf8' });
  
  // Take a snapshot to see page content
  run(`playwright-cli snapshot --filename=guide.yaml`);
  
  // Read the snapshot
  const snapshot = fs.readFileSync(path.join(process.cwd(), '.playwright-cli', 'guide.yaml'), 'utf8');
  fs.writeFileSync(path.join(outDir, 'guide_snapshot.yaml'), snapshot);
  console.log('Guide page snapshot saved');
  
  // Extract article links from the page using eval
  const links = run(`playwright-cli eval "Array.from(document.querySelectorAll('article a, .Post-RichText a, a[href*=\\"/p/\\"]')).map(a => ({href: a.href, text: a.textContent.trim().substring(0, 80)})).filter(l => l.text.includes('MP')).map(l => JSON.stringify(l)).join('\\n')"`);
  fs.writeFileSync(path.join(outDir, 'links.json'), links);
  
  // Now try to get article content for articles with known URLs
  for (const article of articles.filter(a => a.url)) {
    console.log(`\n=== Fetching ${article.id}: ${article.title} ===`);
    try {
      run(`playwright-cli goto ${article.url}`);
      execSync('timeout /t 2 /nobreak >nul', { encoding: 'utf8' });
      
      // Get the article content
      const content = run(`playwright-cli eval "document.querySelector('.Post-RichText, .RichText, article .RichContent, .Post-content')?.textContent || document.querySelector('article')?.textContent || ''"`);
      fs.writeFileSync(path.join(outDir, `${article.id}.txt`), content);
      console.log(`  Saved ${article.id}.txt (${content.length} chars)`);
    } catch (e) {
      console.log(`  Error: ${e.message}`);
    }
  }
  
  // Close browser
  run(`playwright-cli close`);
  
} catch (e) {
  console.error('Fatal error:', e.message);
  try { execSync('playwright-cli close'); } catch (_) {}
}
