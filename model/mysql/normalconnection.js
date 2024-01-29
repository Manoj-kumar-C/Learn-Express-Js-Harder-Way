const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'sql6.freemysqlhosting.net',
  user: 'sql6680402',
  password: 'JtAUjkLa86',
  database: 'sql6680402',
  port: 3306
});

// Connect to the database 
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');

  // Close the connection after connecting (if you want)
  connection.end((err) => {
    if (err) {
      console.error('Error closing connection:', err);
      return;
    }
    console.log('Connection closed');
  });
});
