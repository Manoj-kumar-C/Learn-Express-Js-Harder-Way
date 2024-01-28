const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'sql.freedb.tech',
  user: 'freedb_manojkumaruser',
  password: 'WX*5ErrZF@Eqa3&',
  database: 'freedb_manojkumar'
});

// Connect to the database 
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Perform a simple query
connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
  if (error) {
    console.error('Error executing query:', error);
    throw error;
  }
  console.log('The solution is: ', results[0].solution);
});

// Close the connection
connection.end((err) => {
  if (err) {
    console.error('Error closing connection:', err);
    return;
  }
  console.log('Connection closed');
});
