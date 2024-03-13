const express = require('express');
const app = express();
const net = require('net');
const dgram = require('dgram');

// TCP Server
const tcpServer = net.createServer(socket => {
    console.log('TCP Client connected');

    socket.on('data', data => {
        console.log('TCP Client:', data.toString());
        socket.write('Server: Message received\n');
    });

    socket.on('end', () => {
        console.log('TCP Client disconnected');
    });
});

// UDP Server
const udpServer = dgram.createSocket('udp4');
udpServer.on('listening', () => {
    const address = udpServer.address();
    console.log(`UDP Server listening on ${address.address}:${address.port}`);
});

udpServer.on('message', (msg, rinfo) => {
    console.log(`UDP Client (${rinfo.address}:${rinfo.port}): ${msg}`);
    udpServer.send('Server: Message received', rinfo.port, rinfo.address);
});

tcpServer.listen(3000, () => {
    console.log(`TCP Server listening on port 3000`);
});

udpServer.bind(4000);

app.get('/', (req, res) => {
    res.send('Welcome to TCP/UDP Server');
});

app.listen(8080, () => {
    console.log('HTTP Server listening on port 8080');
});
