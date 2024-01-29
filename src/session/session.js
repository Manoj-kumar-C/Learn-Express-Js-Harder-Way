const express = require('express');
const session = require('express-session');

const app = express();

// Configure the session middleware
app.use(session({
  secret: 'testkey', // Use a strong and secure secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

// Middleware to demonstrate session usage
app.use((req, res, next) => {
  // Access the session
  if (req.session.views) {
    req.session.views++;
  } else {
    req.session.views = 1;
  }

  next();
});

// Route to demonstrate session usage
app.get('/count', (req, res) => {
  res.send(`You have visited this page ${req.session.views} times`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});