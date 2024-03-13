const express = require('express');
const app = express();

let expectedSequenceNumber = 0;

// Endpoint to receive packets from client
app.get('/sendPacket/:sequenceNumber', (req, res) => {
    const receivedSequenceNumber = parseInt(req.params.sequenceNumber);

    // Simulate packet loss (50% chance)
    const ackReceived = Math.random() < 0.5;

    if (ackReceived && receivedSequenceNumber === expectedSequenceNumber) {
        console.log(`Received packet with sequence number ${receivedSequenceNumber}`);
        console.log('Sending acknowledgment...');
        res.send(`ACK for sequence number ${receivedSequenceNumber}`);
        expectedSequenceNumber++;
    } else {
        console.log(`Packet loss or out of order packet. Expected sequence number: ${expectedSequenceNumber}`);
        res.status(500).send('Packet loss or out of order packet');
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
