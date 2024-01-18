const express = require('express');
const app = express();
const port = 3000;

app.get('/resource', (req, res) => {
  // Access query parameters using req.query
  const param1 = req.query.param1;
  const param2 = req.query.param2;

  // Your code logic here

  // Send a response back with the received parameters
  res.send(`Received param1=${param1} and param2=${param2}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// http://localhost:3000/resource?param1=value1&param2=value2