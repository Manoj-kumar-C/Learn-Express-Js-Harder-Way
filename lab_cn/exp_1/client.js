const net = require('net');

const client = new net.Socket();

client.connect(4444, 'localhost', () => {
  console.log('Connected to server');

  client.on('data', (data) => {
    console.log(`Received message from server: ${data}`);
  });

  process.stdin.on('data', (data) => {
    const message = data.toString().trim();
    client.write(message); // Send message to server
  });
});

client.on('close', () => {
  console.log('Connection closed');
});
