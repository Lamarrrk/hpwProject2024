const mysql = require("mysql2");
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123123",
    database: "lab4",
});

conn.connect();

module.exports = conn;