const jwt = require('jsonwebtoken');

// Your secret key (keep this secret!)
const secretKey = 'test101';

// Payload to be included in the JWT
const payload = {
  userId: 123,
  username: 'john_doe',
  role: 'user'
};

// Generating the JWT
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

console.log('Generated JWT:');
console.log(token);
