const express = require('express');
const dns = require('dns');

const app = express();
const PORT = 3000;

// Endpoint to resolve IP address from a domain name
app.get('/resolve', (req, res) => {
    const domain = req.query.domain;

    if (!domain) {
        return res.status(400).json({ error: 'Domain name is required' });
    }

    dns.resolve4(domain, (err, addresses) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to resolve IP address' });
        }

        res.json({ domain, ip: addresses });
    });
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//http://localhost:3000/resolve?domain=example.com