const https = require('https');

function fetchHtmlFollowRedirects(url, maxRedirects = 3) {
  return new Promise((resolve, reject) => {
    if (maxRedirects <= 0) return reject(new Error('Too many redirects'));

    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'identity'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) {
          const u = new URL(url);
          redirectUrl = `${u.protocol}//${u.host}${redirectUrl}`;
        }
        return resolve(fetchHtmlFollowRedirects(redirectUrl, maxRedirects - 1));
      }

      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP Status ${res.statusCode}`));
      }

      let html = '';
      res.on('data', chunk => html += chunk);
      res.on('end', () => resolve(html));
    });

    req.on('error', reject);
  });
}

exports.handler = async function(event, context) {
  try {
    const html = await fetchHtmlFollowRedirects("https://hackatime.hackclub.com/@shivar07");
    
    let decodedJson = null;
    const scriptMatch = html.match(/<script[^>]*data-page="app"[^>]*>([\s\S]*?)<\/script>/);
    if (scriptMatch) {
      decodedJson = scriptMatch[1];
    } else {
      const divMatch = html.match(/<div[^>]*id="app"[^>]*data-page="([\s\S]*?)"/);
      if (divMatch) {
        decodedJson = divMatch[1]
          .replace(/&quot;/g, '"')
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&#39;/g, "'");
      }
    }

    if (!decodedJson) {
      return {
        statusCode: 500,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Inertia app data payload not found in HTML' })
      };
    }

    const data = JSON.parse(decodedJson);
    const props = data.props || {};
    const result = {
      profile: props.profile || {},
      dashboard_stats: props.dashboard_stats || {},
      page_title: props.page_title || ''
    };

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(result)
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: err.message })
    };
  }
};
