const https = require('https');

exports.handler = async function(event, context) {
  return new Promise((resolve, reject) => {
    const url = "https://corsproxy.io/?https://hackatime.hackclub.com/leaderboard";
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
      let html = '';
      res.on('data', chunk => html += chunk);
      res.on('end', () => {
        let decodedJson = null;
        
        // Option 1: script tag
        const scriptMatch = html.match(/<script data-page="app" type="application/json">([\s\S]*?)<\/script>/);
        if (scriptMatch) {
          decodedJson = scriptMatch[1];
        } else {
          // Option 2: div data-page attribute
          const divMatch = html.match(/<div id="app" data-page="([\s\S]*?)">/);
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
            resolve({
              statusCode: 200,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              },
              body: JSON.stringify(data)
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
