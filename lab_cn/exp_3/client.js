const express = require('express');
const app = express();
const axios = require('axios');

const serverURL = 'http://localhost:3000';

let sequenceNumber = 0;

// Simulate sending packets to the server
function sendPacket() {
    console.log(`Sending packet with sequence number ${sequenceNumber}`);
    axios.get(`${serverURL}/sendPacket/${sequenceNumber}`)
        .then(response => {
            console.log('Received acknowledgment:', response.data);
            sequenceNumber++;
            // Send the next packet after receiving acknowledgment
            setTimeout(sendPacket, 1000); // Simulating delay
        })
        .catch(error => {
            console.error('Error:', error.message);
            // Resend the packet on error
            setTimeout(sendPacket, 1000); // Simulating delay
        });
}

// Start sending packets
sendPacket();

app.listen(4000, () => {
    console.log('Client listening on port 4000');
});
