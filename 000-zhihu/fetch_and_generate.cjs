#!/usr/bin/env node
/**
 * Fetch all zhihu column article content and generate zhihu.tex
 * Uses Zhihu API to get article content (which worked for titles before)
 */
const https = require('https');
const fs = require('fs');
const path = require('path');

const HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cookie": process.env.ZHIHU_COOKIE || '',
};

function fetchJSON(apiUrl, referer) {
    return new Promise((resolve, reject) => {
        const u = new URL(apiUrl);
        const opts = {
            hostname: u.hostname,
            port: u.port || 443,
            path: u.pathname + u.search,
            method: 'GET',
            headers: { ...HEADERS, "Referer": referer || "https://www.zhihu.com/" },
            timeout: 15000,
        };
        const req = https.request(opts, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                try { resolve(JSON.parse(body)); }
                catch (e) { resolve({ raw: body, error: 'parse' }); }
            });
        });
        req.on('error', (e) => resolve({ error: e.message }));
        req.on('timeout', () => { req.destroy(); resolve({ error: 'timeout' }); });
        req.end();
    });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// Convert zhihu HTML content to LaTeX
function contentToLatex(title, content) {
    if (!content) return '';
    
    // Clean up HTML
    let text = content
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<p>/gi, '\n')
        .replace(/<\/p>/gi, '\n')
        .replace(/<b>/gi, '\\textbf{')
        .replace(/<\/b>/gi, '}')
        .replace(/<i>/gi, '\\textit{')
        .replace(/<\/i>/gi, '}')
        .replace(/<em>/gi, '\\textit{')
        .replace(/<\/em>/gi, '}')
        .replace(/<strong>/gi, '\\textbf{')
        .replace(/<\/strong>/gi, '}')
        .replace(/<ul>/gi, '\n\\begin{itemize}\n')
        .replace(/<\/ul>/gi, '\n\\end{itemize}\n')
        .replace(/<ol>/gi, '\n\\begin{enumerate}\n')
        .replace(/<\/ol>/gi, '\n\\end{enumerate}\n')
        .replace(/<li>/gi, '\n\\item ')
        .replace(/<\/li>/gi, '')
        .replace(/<blockquote>/gi, '\n\\begin{quote}\n')
        .replace(/<\/blockquote>/gi, '\n\\end{quote}\n')
        .replace(/<hr\s*\/?>/gi, '\n\\rule{\\textwidth}{0.4pt}\n')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, ' ')
        .replace(/<img[^>]*alt="([^"]*)"[^>]*>/gi, '\n[图：$1]\n')
        .replace(/<img[^>]*>/gi, '\n[图片]\n')
        .replace(/<a[^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/gi, '\\href{$1}{$2}')
        .replace(/<code>/gi, '\\texttt{')
        .replace(/<\/code>/gi, '}')
        .replace(/<pre><code[^>]*>/gi, '\n\\begin{verbatim}\n')
        .replace(/<\/code><\/pre>/gi, '\n\\end{verbatim}\n')
        .replace(/<h1[^>]*>/gi, '\n\\section{')
        .replace(/<\/h1>/gi, '}\n')
        .replace(/<h2[^>]*>/gi, '\n\\subsection{')
        .replace(/<\/h2>/gi, '}\n')
        .replace(/<h3[^>]*>/gi, '\n\\subsubsection{')
        .replace(/<\/h3>/gi, '}\n')
        .replace(/<[^>]+>/g, '')  // Remove remaining HTML tags
        .replace(/&[a-z]+;/g, '') // Remove remaining entities
        .replace(/\n{3,}/g, '\n\n')
        .replace(/\\\(/g, '$')
        .replace(/\\\)/g, '$')
        .replace(/\\\[/g, '$$')
        .replace(/\\\]/g, '$$')
        .trim();
    
    return text;
}

async function main() {
    const slug = 'ps-math';
    const outDir = path.join(__dirname, 'articles');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    console.error('Fetching all articles from column...');

    // Step 1: Get all articles (pagination)
    let allArticles = [];
    let offset = 0;
    let page = 1;

    while (true) {
        const url = `https://www.zhihu.com/api/v4/columns/${slug}/items?limit=20&offset=${offset}`;
        const resp = await fetchJSON(url, `https://www.zhihu.com/column/${slug}`);
        const data = resp.data || [];
        if (!data.length) break;
        
        allArticles = allArticles.concat(data);
        console.error(`  Page ${page}: ${data.length} articles (total: ${allArticles.length})`);
        
        if (resp.paging && resp.paging.is_end) break;
        offset += 20;
        page++;
        await sleep(800);
    }

    console.error(`\nTotal articles: ${allArticles.length}`);

    // Step 2: Get full content for each article
    const articles = allArticles.map(a => ({
        id: a.id,
        title: (a.title || '').trim(),
        url: `https://zhuanlan.zhihu.com/p/${a.id}`,
        votes: a.voteup_count || 0,
        created: a.created || 0,
        excerpt: (a.excerpt || '').trim(),
    }));

    // Sort by MP number
    const mpPattern = /^MP(\d+)/;
    articles.sort((a, b) => {
        const ma = a.title.match(mpPattern);
        const mb = b.title.match(mpPattern);
        if (ma && mb) return parseInt(ma[1]) - parseInt(mb[1]);
        if (ma) return -1;
        if (mb) return 1;
        return (a.created || 0) - (b.created || 0);
    });

    // Step 3: Fetch content for each article
    console.error('\nFetching article contents...');
    
    const contents = [];
    let fetched = 0;
    
    for (const article of articles) {
        try {
            const apiUrl = `https://www.zhihu.com/api/v4/articles/${article.id}`;
            const resp = await fetchJSON(apiUrl, article.url);
            
            let content = '';
            if (resp.content) {
                content = resp.content;
            } else if (resp.raw) {
                // Try to parse as HTML
                content = resp.raw;
            }
            
            const latexContent = contentToLatex(article.title, content);
            
            contents.push({
                id: article.id,
                title: article.title,
                votes: article.votes,
                created: article.created,
                content: latexContent,
                rawLength: content.length,
            });
            
            fetched++;
            if (fetched % 5 === 0) {
                console.error(`  Fetched ${fetched}/${articles.length} articles`);
            }
            
            // Save individual file
            const filename = article.title.replace(/[\/:*?"<>|]/g, '_').substring(0, 80);
            fs.writeFileSync(
                path.join(outDir, `${String(contents.length).padStart(3, '0')}_${filename}.txt`),
                latexContent
            );
            
            await sleep(300);
        } catch (e) {
            console.error(`  Error fetching "${article.title}": ${e.message}`);
        }
    }

    console.error(`\nFetched ${contents.length} article contents`);

    // Step 4: Generate zhihu.tex
    console.error('\nGenerating zhihu.tex...');
    
    let tex = `%!TEX program = lualatex
\\documentclass[10pt, openany]{book}

\\usepackage{../preamble}
\\addbibresource{../ref.bib}

\\fancyhead[LE,RO]{\\thepage}
\\fancyhead[RE]{\\textbf{数学物理连载}}
\\fancyhead[LO]{\\textit{知乎专栏汇编}}
\\renewcommand{\\headrulewidth}{0.4pt}

\\begin{document}

\\frontmatter
\\title{\\textbf{数学物理连载}\\\\ \\large 知乎专栏汇编}
\\author{菜场学院菜老师}
\\date{\\today}
\\maketitle
\\tableofcontents

\\mainmatter

`;

    // Generate chapters - group by topic series
    let currentChapter = '';
    let chapterNum = 0;
    
    for (const article of contents) {
        // Try to group into chapters based on title patterns
        const title = article.title;
        let chapterTitle = '';
        
        if (title.includes('拓扑')) chapterTitle = '拓扑学';
        else if (title.includes('代数加油站') || title.includes('同态') || title.includes('同调')) chapterTitle = '代数基础';
        else if (title.includes('张量')) chapterTitle = '张量';
        else if (title.includes('外代数') || title.includes('外微分') || title.includes('外形式')) chapterTitle = '外代数与外微分';
        else if (title.includes('力学') || title.includes('电磁') || title.includes('Maxwell')) chapterTitle = '数学物理';
        else if (title.includes('线性代数')) chapterTitle = '线性代数';
        else if (title.includes('范畴')) chapterTitle = '范畴论';
        else if (title.includes('几何')) chapterTitle = '几何';
        else if (title.includes('数论') || title.includes('Galois')) chapterTitle = '数论';
        else if (title.includes('群') && (title.includes('同调') || title.includes('上同调') || title.includes('表示'))) chapterTitle = '群论与同调';
        else if (title.includes('Lie') || title.includes('李')) chapterTitle = '李群与李代数';
        else if (title.includes('向量丛') || title.includes('上同调')) chapterTitle = '向量丛与上同调';
        else chapterTitle = '其他';
        
        if (chapterTitle !== currentChapter) {
            currentChapter = chapterTitle;
            chapterNum++;
            tex += `\n\\chapter{${currentChapter}}\n\n`;
        }
        
        // Section for each article
        const date = article.created ? new Date(article.created * 1000).toISOString().slice(0, 10) : '';
        tex += `\\section{${title}}\n`;
        if (date) {
            tex += `\\textit{发布于 ${date}} \\hfill \\textit{${article.votes} 赞同}\n\n`;
        }
        
        if (article.content && article.content.length > 10) {
            tex += article.content + '\n\n';
        } else {
            tex += `\\textit{[内容未能获取]}\n\n`;
        }
        
        tex += '\\rule{\\textwidth}{0.4pt}\n\n';
    }

    tex += `
\\end{document}
`;

    fs.writeFileSync(path.join(__dirname, 'zhihu.tex'), tex);
    console.error(`\nGenerated zhihu.tex with ${contents.length} articles in ${chapterNum} chapters`);
    console.error(`File size: ${(tex.length / 1024).toFixed(1)} KB`);
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
