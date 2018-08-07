// 引入数据库
const mysql = require('mysql')
const config = require('../../config')
const { HOST, USER, PASSWORD, DATABASE } = config.database
// 创建数据池
const pool = mysql.createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE
})

// 通用执行方法
let query = (sql, values) => {
  // 要返回一个 promise
  return new Promise((resolve, reject) => {
    // 打开连接
    pool.getConnection((err, connection) => {
      if (err) throw err
      connection.query(sql, values, (err, rows) => {
        if (err) {
          reject(err)
        } else {
          resolve(rows)
        }
        // 释放连接
        connection.release()
      })
    })
  })
}

// 增
// let insertData = (table, values) => {
//   let _sql = `INSERT INTO ?? SET ?`
//   return query(_sql, [table, values])
// }

// 删

// 查（分页）
// let findDataByPage = (table, keys, start, end) => {
//   let _sql = `SELECT ** FROM ** LIMIT`
// }

// 改

module.exports = {
  query
}