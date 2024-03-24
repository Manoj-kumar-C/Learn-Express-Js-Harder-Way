// Server
const net = require('net');
const fs = require('fs');

const server = net.createServer(socket => {
    console.log('Client connected.');

    socket.on('data', data => {
        const fileName = data.toString().trim();
        console.log('Requested file:', fileName);
        
        fs.readFile(fileName, (err, fileData) => {
            if (err) {
                console.error('Error reading file:', err);
                socket.write('Error: File not found or cannot be read.');
                return;
            }
            socket.write(fileData);
            console.log('File sent.');
        });
    });

    socket.on('end', () => {
        console.log('Client disconnected.');
    });
});

const PORT = 8081;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


// Client
const net = require('net');
const fs = require('fs');

const client = new net.Socket();

client.connect(8081, 'localhost', () => {
    console.log('Connected to server.');
    
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Enter the file name to transfer from server: ', fileName => {
        client.write(fileName);
    });
});

client.on('data', data => {
    const fileName = 'received_file.txt'; // You can change this to save with a different name
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File received and saved as', fileName);
        client.end();
    });
});

client.on('close', () => {
    console.log('Connection closed.');
});
