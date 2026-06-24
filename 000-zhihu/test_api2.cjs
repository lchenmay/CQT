const https = require('https');
const zlib = require('zlib');

const HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Connection": "keep-alive",
};

function fetchJSON(apiUrl, referer) {
    return new Promise((resolve) => {
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
            console.log(`Status: ${res.statusCode}, Encoding: ${res.headers['content-encoding'] || 'none'}`);
            let raw = Buffer.alloc(0);
            res.on('data', chunk => { raw = Buffer.concat([raw, chunk]); });
            res.on('end', () => {
                let body = raw;
                const enc = res.headers['content-encoding'];
                try {
                    if (enc === 'br') {
                        body = zlib.brotliDecompressSync(raw);
                    } else if (enc === 'gzip' || enc === 'deflate') {
                        body = zlib.gunzipSync(raw);
                    }
                    const json = JSON.parse(body.toString('utf8'));
                    resolve(json);
                } catch (e) {
                    console.log(`Parse error: ${e.message}`);
                    console.log(`Raw (first 200): ${raw.toString('utf8').substring(0, 200)}`);
                    resolve({ error: e.message });
                }
            });
        });
        req.on('error', (e) => resolve({ error: e.message }));
        req.on('timeout', () => { req.destroy(); resolve({ error: 'timeout' }); });
        req.end();
    });
}

async function main() {
    console.log('=== Test 1: Column items (page 1) ===');
    const items = await fetchJSON(
        'https://www.zhihu.com/api/v4/columns/ps-math/items?limit=20&offset=0',
        'https://www.zhihu.com/column/ps-math'
    );
    console.log(`Items count: ${items.data ? items.data.length : 'no data'}`);
    console.log(`Paging: ${JSON.stringify(items.paging || {})}`);
    
    if (items.data && items.data.length > 0) {
        items.data.slice(0, 5).forEach((a, i) => {
            console.log(`  ${i+1}. [${a.voteup_count || 0}v] ${a.title} (id: ${a.id})`);
        });
        
        // Test article content
        const firstId = items.data[0].id;
        console.log(`\n=== Test 2: Article ${firstId} ===`);
        const article = await fetchJSON(
            `https://www.zhihu.com/api/v4/articles/${firstId}`,
            `https://zhuanlan.zhihu.com/p/${firstId}`
        );
        console.log('Has content:', !!article.content);
        if (article.content) {
            console.log('Content length:', article.content.length);
            console.log('Content preview:', article.content.substring(0, 300));
        }
    }
    
    // Test page 2
    console.log('\n=== Test 3: Column items (page 2) ===');
    const items2 = await fetchJSON(
        'https://www.zhihu.com/api/v4/columns/ps-math/items?limit=20&offset=20',
        'https://www.zhihu.com/column/ps-math'
    );
    console.log(`Items count: ${items2.data ? items2.data.length : 'no data'}`);
    if (items2.data && items2.data.length > 0) {
        items2.data.slice(0, 3).forEach((a, i) => {
            console.log(`  ${i+1}. [${a.voteup_count || 0}v] ${a.title}`);
        });
    }
}

main().catch(e => console.error(e));
