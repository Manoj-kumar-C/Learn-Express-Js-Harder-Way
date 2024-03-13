const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    // host: 'mysql-sophia-ai-developermanoj2003-47dc.a.aivencloud.com',
    // port: '28808',
    // user: 'avnadmin',
    // password: 'AVNS_3AxuszlkWYIkCJZF0uL',
    // database: 'defaultdb',
    // waitForConnections: true,
    // connectionLimit: 10,
    // queueLimit: 0,
    // ssl: true
});

// Attempt to establish a connection to the MySQL server
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL server: ' + err.message);
        return;
    }

    console.log('Connected to MySQL server.');

    // Use the connection to query the database
    connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
        // Release the connection back to the pool
        connection.release();

        if (error) {
            console.error('Error performing query: ' + error.message);
            return;
        }
        
        console.log('The solution is: ', results[0].solution);
    });
});

// Close the connection pool when done
pool.end((err) => {
    if (err) {
        console.error('Error closing connection pool: ' + err.message);
        return;
    }
    console.log('Connection pool closed.');
});
