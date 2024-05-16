const mysql = require('mysql2/promise'); //package mysql2 imported
const dotenv = require('dotenv');

dotenv.config();

const mysqlPool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

module.exports = mysqlPool;