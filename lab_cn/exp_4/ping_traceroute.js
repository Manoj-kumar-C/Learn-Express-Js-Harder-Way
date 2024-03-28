const express = require('express');
const { exec } = require('child_process');
const app = express();

// Ping Endpoint
app.get('/ping/:host', (req, res, next) => {
    const host = req.params.host;
    exec(`ping -c 4 ${host}`, (error, stdout, stderr) => {
        if (error || stderr) {
            const errorMessage = error ? error.message : stderr;
            return next(new Error(`Error occurred while pinging: ${errorMessage}`));
        }
        res.send(stdout);
    });
});

// Traceroute Endpoint
app.get('/traceroute/:host', (req, res, next) => {
    const host = req.params.host;
    exec(`traceroute ${host}`, (error, stdout, stderr) => {
        if (error || stderr) {
            const errorMessage = error ? error.message : stderr;
            return next(new Error(`Error occurred while tracing route: ${errorMessage}`));
        }
        res.send(stdout);
    });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
