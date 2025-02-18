const express = require('express');
const cors = require('cors');
const path = require('path');
const request = require('request');
const cheerio = require('cheerio');

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'gateway.html'));
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/proxy', (req, res, next) => {
    const targetUrl = req.query.target;
    if (!targetUrl) {
        return res.status(400).send('Target URL is required. Use ?target=<URL>');
    }

    console.log('[Proxy] Incoming request for:', targetUrl);

    // Use encoding: null to properly handle binary responses
    request({ url: targetUrl, encoding: null }, (error, response, body) => {
        if (error) {
            console.error('[Proxy Error]:', error);
            return res.status(500).send('Failed to fetch the target page.');
        }

        if (!body) {
            return res.status(500).send('Received empty response from target.');
        }

        // Set the Content-Type header for the response
        const contentType = response.headers['content-type'];
        if (contentType) {
            res.setHeader('Content-Type', contentType);
        }

        // Process HTML content only
        if (contentType && contentType.includes('text/html')) {
            const $ = cheerio.load(body);

            // Rewrite relative URLs for img, script, and link tags
            $('img, script, link').each((i, element) => {
                const tag = $(element);
                // Use 'src' for img & script, 'href' for link tags
                const attr = tag.is('link') ? 'href' : 'src';
                let url = tag.attr(attr);

                // If the URL is not absolute (i.e. doesn't start with http), then rewrite it.
                if (url && !url.startsWith('http')) {
                    try {
                        const absoluteUrl = new URL(url, targetUrl).href;
                        tag.attr(attr, absoluteUrl);
                    } catch (err) {
                        console.error(`Error converting URL: ${url}`, err);
                    }
                }
            });

            return res.send($.html());
        } else {
            // For non-HTML content, send the body as is.
            return res.send(body);
        }
    });
});

app.listen(port, () => {
    console.log(`Proxy server running on http://localhost:${port}`);
});
