const https = require('https');

exports.handler = async function(event, context) {
  return new Promise((resolve, reject) => {
    const url = "https://api.allorigins.win/raw?url=https://hackatime.hackclub.com/users/shivar07";
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
      let html = '';
      res.on('data', chunk => html += chunk);
      res.on('end', () => {
        const scriptMatch = html.match(/<script data-page="app" type="application/json">([\s\S]*?)<\/script>/);
        if (scriptMatch) {
          try {
            const data = JSON.parse(scriptMatch[1]);
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
            body: JSON.stringify({ error: 'Inertia script tag not found' })
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
