const express = require('express');
const { exec } = require('child_process');
const app = express();

// Ping Endpoint
app.get('/ping/:host', (req, res) => {
    const host = req.params.host;
    exec(`ping -c 4 ${host}`, (error, stdout, stderr) => {
        if (error || stderr) {
            res.status(500).send('Error occurred while pinging');
            return;
        }
        res.send(stdout);
    });
});

// Traceroute Endpoint
app.get('/traceroute/:host', (req, res) => {
    const host = req.params.host;
    exec(`traceroute ${host}`, (error, stdout, stderr) => {
        if (error || stderr) {
            res.status(500).send('Error occurred while tracing route');
            return;
        }
        res.send(stdout);
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
