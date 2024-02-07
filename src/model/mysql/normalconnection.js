const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  // host: 'viaduct.proxy.rlwy.net',
  // user: 'root',
  // password: 'dH246eCDHDcDga2A42G633hdghED4aad',
  // database: 'railway',
  // port: 56991
});

// Connect to the database 
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');

  // Create a table
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE
    )
  `;

  connection.query(createTableQuery, (err, results, fields) => {
    if (err) {
      console.error('Error creating table:', err);
      return;
    }
    console.log('Table created');

    // Show tables
    connection.query('SHOW TABLES', (err, results, fields) => {
      if (err) {
        console.error('Error querying for tables:', err);
        return;
      }

      console.log('Tables in the database:');
      results.forEach((result) => {
        console.log(result[fields[0].name]);
      });

      // Close the connection after querying (if you want)
      connection.end((err) => {
        if (err) {
          console.error('Error closing connection:', err);
          return;
        }
        console.log('Connection closed');
      });
    });
  });
});
