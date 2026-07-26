const https = require('https');

exports.handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    let bodyData = {};
    if (event.body) {
      bodyData = JSON.parse(event.body);
    }
    
    const userPrompt = bodyData.prompt || event.queryStringParameters?.prompt || "";
    if (!userPrompt.trim()) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing prompt parameter" })
      };
    }

    // Read API Key from Netlify Environment Variables
    const apiKey = process.env.GEMINI_API_KEY || Buffer.from("QVEuQWI4Uk42TGgzdDhKdGNoSHh4QzZyREVRSFpkUWRSanI5SWhITmloNzhRaVFLNmdOdmc=", "base64").toString("utf-8");
    const models = ["gemini-2.5-flash", "gemini-2.0-flash"];

    for (const model of models) {
      const result = await new Promise((resolve) => {
        const postData = JSON.stringify({
          contents: [
            {
              parts: [{ text: "You are J.A.R.V.I.S., Tony Stark's futuristic AI assistant. Answer concisely in 1-3 short sentences with a polite, sophisticated sci-fi tone (addressing the user as 'sir' occasionally). Question: " + userPrompt }]
            }
          ]
        });

        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const req = https.request(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
          }
        }, (res) => {
          let resBody = '';
          res.on('data', chunk => resBody += chunk);
          res.on('end', () => {
            if (res.statusCode === 200) {
              try {
                const parsed = JSON.parse(resBody);
                const replyText = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
                if (replyText) {
                  resolve(replyText.trim());
                  return;
                }
              } catch (e) {}
            }
            resolve(null);
          });
        });

        req.on('error', () => resolve(null));
        req.write(postData);
        req.end();
      });

      if (result) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ reply: result })
        };
      }
    }

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "AI core service temporarily unavailable." })
    };

  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message })
    };
  }
};
