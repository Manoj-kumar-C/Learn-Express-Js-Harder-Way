require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.query('SHOW TABLES', function (error, results, fields) {
    if (error) throw error;

    console.log('Tables in the database:');
    results.forEach((result) => {
        console.log(result[fields[0].name]);
    });

    connection.end();
});
