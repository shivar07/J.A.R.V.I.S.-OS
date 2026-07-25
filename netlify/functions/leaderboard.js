const https = require('https');

exports.handler = async function(event, context) {
  return new Promise((resolve, reject) => {
    const url = "https://hackatime.hackclub.com/leaderboard";
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
      let html = '';
      res.on('data', chunk => html += chunk);
      res.on('end', () => {
        const versionMatch = html.match(/"version"\s*:\s*"([a-f0-9]+)"/);
        const version = versionMatch ? versionMatch[1] : "3dc95e9806593cd91a7e757137df9aa3ffad6a30";

        // Fetch Inertia JSON elements
        const reqApi = https.get(url, {
          headers: {
            'User-Agent': 'Mozilla/5.0',
            'X-Inertia': 'true',
            'X-Inertia-Version': version,
            'X-Inertia-Partial-Component': 'Leaderboards/Index',
            'X-Inertia-Partial-Data': 'entries'
          }
        }, (resApi) => {
          let dataJson = '';
          resApi.on('data', chunk => dataJson += chunk);
          resApi.on('end', () => {
            resolve({
              statusCode: 200,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              },
              body: dataJson
            });
          });
        });

        reqApi.on('error', (e) => {
          resolve({
            statusCode: 500,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ error: e.message })
          });
        });
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
