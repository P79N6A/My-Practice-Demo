const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'qingtian',
  database: 'node_test'
})

connection.connect()

module.exports = { connection }