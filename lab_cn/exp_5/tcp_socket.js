const net = require('net');

// Server
const server = net.createServer(socket => {
    console.log('Client connected.');

    socket.on('data', data => {
        console.log('Client:', data.toString());
    });

    socket.on('end', () => {
        console.log('Client disconnected.');
    });
});

const PORT = 3000; // Choose any available port number
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Client
const client = new net.Socket();

client.connect(3000, 'localhost', () => {
    console.log('Connected to server.');

    const messages = ['Hello', 'How are you?', 'Goodbye'];

    messages.forEach(message => {
        client.write(message);
    });

    client.end(); // End the connection after sending all messages
});

client.on('close', () => {
    console.log('Connection closed.');
});
