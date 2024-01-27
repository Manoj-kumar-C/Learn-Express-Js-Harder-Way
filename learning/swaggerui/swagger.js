const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs'); // You may need to install this package: npm install yamljs

const app = express();
const PORT = 3000;

const swaggerDocument = YAML.load('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
