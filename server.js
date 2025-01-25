const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());
console.log('CORS enabled for all routes.');

// Serve the gateway.html page at the root route
app.get('/', (req, res) => {
    console.log('Serving gate page: gateway.html');
    res.sendFile(path.join(__dirname, 'gateway.html'));
});

// Serve the index.html page at /index.html
app.get('/index.html', (req, res) => {
    console.log('Serving main page: index.html');
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Generalized proxy to dynamically proxy URLs
app.use('/proxy', (req, res, next) => {
    const targetUrl = req.query.target; // Get the target URL from the query string
    if (!targetUrl) {
        return res.status(400).send('Target URL is required. Use ?target=<URL>'); // Handle missing URL
    }

    console.log('[Proxy] Incoming request for:', targetUrl);

    // Add proxy middleware with additional configurations
    createProxyMiddleware({
        target: targetUrl,
        changeOrigin: true,
        ws: true,
        pathRewrite: (path, req) => {
            console.log('[Proxy] Original path:', path);
            return path.replace('/proxy', ''); // Strip '/proxy' from the URL path
        },
        onProxyReq: (proxyReq, req, res) => {
            console.log('[Proxy] Proxying request to:', proxyReq.url);

            // Fake user-agent
            proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.5845.188 Safari/537.36');

            // Add headers to handle CORS more effectively
            proxyReq.setHeader('Access-Control-Allow-Origin', '*');
            proxyReq.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            proxyReq.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        },
        onProxyRes: (proxyRes, req, res) => {
            console.log('[Proxy] Proxy response status:', proxyRes.statusCode);

            // Handle content types for images, CSS, etc.
            if (proxyRes.headers['content-type'] && proxyRes.headers['content-type'].includes('image')) {
                res.setHeader('Content-Type', proxyRes.headers['content-type']);
            }

            // Handling SSL/TLS requests (https websites)
            if (proxyRes.statusCode === 301 || proxyRes.statusCode === 302) {
                const redirectUrl = proxyRes.headers['location'];
                res.setHeader('Location', redirectUrl); // Update location header for redirects
                res.status(proxyRes.statusCode).end();
            }
        },
        onError: (err, req, res) => {
            console.error('[ERROR] Proxy error:', err);

            // Handle specific errors with better messages
            if (err.code === 'ECONNREFUSED') {
                res.status(500).send('Connection refused. The target server may be down.');
            } else {
                res.status(500).send('Something went wrong with the proxy.');
            }
        },
    })(req, res, next);
});

// Start the server
app.listen(port, () => {
    console.log(`Proxy server running on http://localhost:${port}`);
});
