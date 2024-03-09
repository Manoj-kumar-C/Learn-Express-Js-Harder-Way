const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (data) => {
    const message = data.toString().trim();
    console.log(`Received message from client: ${message}`);
    socket.write(message); // Echo back the message to the client
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

const PORT = 4444;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
