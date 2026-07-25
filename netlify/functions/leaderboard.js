const https = require('https');

function fetchHtmlFollowRedirects(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        ...headers
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) {
          const u = new URL(url);
          redirectUrl = `${u.protocol}//${u.host}${redirectUrl}`;
        }
        return resolve(fetchHtmlFollowRedirects(redirectUrl, headers));
      }

      let html = '';
      res.on('data', chunk => html += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, body: html }));
    });

    req.on('error', reject);
  });
}

exports.handler = async function(event, context) {
  try {
    const targetUrl = "https://hackatime.hackclub.com/leaderboards";
    
    // Step 1: get initial page to extract Inertia version hash
    const res1 = await fetchHtmlFollowRedirects(targetUrl);
    const versionMatch = res1.body.match(/"version"\s*:\s*"([a-f0-9]+)"/);
    const version = versionMatch ? versionMatch[1] : "3dc95e9806593cd91a7e757137df9aa3ffad6a30";

    // Step 2: request full entries using Inertia headers
    const res2 = await fetchHtmlFollowRedirects(targetUrl, {
      'X-Inertia': 'true',
      'X-Inertia-Version': version,
      'X-Inertia-Partial-Component': 'Leaderboards/Index',
      'X-Inertia-Partial-Data': 'entries'
    });

    const data = JSON.parse(res2.body);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: err.message })
    };
  }
};
