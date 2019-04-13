const { connection } = require('./db')

async function loginDao (data) {
  return new Promise((resolve, reject) => {
    connection.query(`select * from user where username='${data.username}' and password='${data.password}';`, (err, results, fields) => {
      if (err) {
        reject(arr)
      }
      resolve(results)
    })
  })
}

async function registerDao (data) {
  return new Promise((resolve, reject) => {
    connection.query(
      `insert into user (username, password) values ('${data.username}', '${data.password}')`,
      (err, results, fields) => {
        if (err) {
          reject(err)
        } else {
          resolve(results)
        }
      }
    )
  })
}

module.exports = {
  loginDao,
  registerDao
}