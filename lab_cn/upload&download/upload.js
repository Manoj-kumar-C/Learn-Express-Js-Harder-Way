const express = require('express');
const http = require('http');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Endpoint to handle file uploads
app.post('/upload', (req, res) => {
    const file = req.files.file;

    if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    // Move the uploaded file to the "uploads" directory
    file.mv(`uploads/${file.name}`, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to upload file' });
        }

        res.json({ message: 'File uploaded successfully' });
    });
});

// Endpoint to handle file downloads
app.get('/download/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const filePath = `uploads/${fileName}`;

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'File not found' });
    }

    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
});

// Start the HTTP server
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
