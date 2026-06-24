const https = require('https');

const HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Cache-Control": "no-cache",
};

function fetchJSON(apiUrl) {
    return new Promise((resolve) => {
        const u = new URL(apiUrl);
        const opts = {
            hostname: u.hostname,
            port: u.port || 443,
            path: u.pathname + u.search,
            method: 'GET',
            headers: { ...HEADERS, "Referer": "https://www.zhihu.com/column/ps-math" },
            timeout: 15000,
        };
        const req = https.request(opts, (res) => {
            console.log(`Status: ${res.statusCode}`);
            console.log(`Headers: ${JSON.stringify(res.headers)}`);
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                console.log(`Body (first 500): ${body.substring(0, 500)}`);
                try {
                    const json = JSON.parse(body);
                    resolve(json);
                } catch (e) {
                    resolve({ error: 'parse', body: body.substring(0, 200) });
                }
            });
        });
        req.on('error', (e) => resolve({ error: e.message }));
        req.on('timeout', () => { req.destroy(); resolve({ error: 'timeout' }); });
        req.end();
    });
}

async function main() {
    console.log('=== Test 1: Column info ===');
    const info = await fetchJSON('https://www.zhihu.com/api/v4/columns/ps-math');
    console.log(JSON.stringify(info, null, 2).substring(0, 500));
    
    console.log('\n=== Test 2: Column items (page 1) ===');
    const items = await fetchJSON('https://www.zhihu.com/api/v4/columns/ps-math/items?limit=20&offset=0');
    console.log(`Items count: ${items.data ? items.data.length : 'no data'}`);
    if (items.data && items.data.length > 0) {
        console.log('First item title:', items.data[0].title);
        console.log('First item id:', items.data[0].id);
    }
    
    // Try single article
    if (items.data && items.data.length > 0) {
        const firstId = items.data[0].id;
        console.log(`\n=== Test 3: Article ${firstId} ===`);
        const article = await fetchJSON(`https://www.zhihu.com/api/v4/articles/${firstId}`);
        console.log('Has content:', !!article.content);
        console.log('Content length:', article.content ? article.content.length : 0);
    }
}

main().catch(e => console.error(e));
