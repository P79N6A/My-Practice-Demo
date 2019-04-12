const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost', // 主机地址 （默认：localhost）
  user: 'root', // 用户名
  password: 'qingtian', // 密码
  database: 'node_test' // 要连接的数据库名
})

connection.connect()

connection.query('select * from user;', function (err, results, fields) {
  if (err) throw err
  console.log(results[0]) // 获取的数据结果
  console.log(fields)
})