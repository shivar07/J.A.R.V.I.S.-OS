const https = require('https');

exports.handler = async function(event, context) {
  return new Promise((resolve, reject) => {
    const url = "https://api.codetabs.com/v1/proxy?quest=https://hackatime.hackclub.com/users/shivar07";
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'identity',
        'Connection': 'keep-alive'
      }
    }, (res) => {
      let html = '';
      res.on('data', chunk => html += chunk);
      res.on('end', () => {
        let decodedJson = null;
        
        // Option 1: script tag
        const scriptMatch = html.match(/<script[^>]*data-page="app"[^>]*>([\s\S]*?)<\/script>/);
        if (scriptMatch) {
          decodedJson = scriptMatch[1];
        } else {
          // Option 2: div data-page attribute
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

        if (decodedJson) {
          try {
            const data = JSON.parse(decodedJson);
            const props = data.props || {};
            const result = {
              profile: props.profile || {},
              dashboard_stats: props.dashboard_stats || {},
              page_title: props.page_title || ''
            };
            resolve({
              statusCode: 200,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              },
              body: JSON.stringify(result)
            });
          } catch (e) {
            resolve({
              statusCode: 500,
              headers: { 'Access-Control-Allow-Origin': '*' },
              body: JSON.stringify({ error: 'Failed to parse JSON: ' + e.message })
            });
          }
        } else {
          resolve({
            statusCode: 500,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ error: 'Inertia app data payload not found in HTML' })
          });
        }
      });
    });

    req.on('error', (e) => {
      resolve({
        statusCode: 500,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: e.message })
      });
    });
  });
};
