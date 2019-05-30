// 引入 mysql 模块
const mysql = require('mysql');

// 创建数据库池
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'qingtian',
  database: 'my_blob'
})

// 封装数据库调用语句
let query = function( sql, values ) {

  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        resolve( err )
      } else {
        connection.query(sql, values, ( err, rows) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })

}

module.exports = {
  query,
}