const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample data representing SNMP-like information
let deviceInfo = {
    hostname: 'example_device',
    ipAddress: '192.168.1.100',
    status: 'UP',
    uptime: '10 days',
    interfaces: [
        { name: 'eth0', status: 'UP', ipAddress: '192.168.1.100' },
        { name: 'eth1', status: 'DOWN', ipAddress: '' }
    ]
};

// Endpoint to get device information
app.get('/snmp/device', (req, res) => {
    res.json(deviceInfo);
});

// Endpoint to update device information
app.put('/snmp/device', (req, res) => {
    deviceInfo = req.body;
    res.json({ message: 'Device information updated successfully' });
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// curl http://localhost:3000/snmp/device
// To test the server 


// To update the server
// curl -X PUT -H "Content-Type: application/json" -d '{"hostname": "updated_device", "status": "DOWN"}' http://localhost:3000/snmp/device
