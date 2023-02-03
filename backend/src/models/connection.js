/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
const mysql = require('mysql2/promise');
require('dotenv').config();

               

const connection = mysql.createPool({
  // eslint-disable-next-line no-undef
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password:process.env.MYSQL_PASSWORD,
  database:process.env.MYSQL_DB
});

module.exports = connection;