// middleware is a concepts to run the next function 

// It helps in url modification and url router replacement etc .. 


const express = require("express")

const app = express();

app.use((req, res, next) => {
    console.log('Middleware 1: Logging request');
    next();
  });
  
  // Middleware function 2
  app.use((req, res, next) => {
    console.log('Middleware 2: Performing some task');
    // You can also modify the request or response objects here
    next();
  });
  
  // Route handler
  app.get('/', (req, res) => {
    res.send('Hello, Express!');
  });

  app.use('/special', (req, res, next) => {
    console.log('This middleware runs only for requests to /special');
    next();
  });

  app.get('/special', (req, res) => {
    res.send('This is a special route');
  });
  
  
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });