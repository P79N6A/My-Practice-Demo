const dbUtil = require('../utils/dbUtil')
const UserPo = require('../po/userPo')

module.exports = {
  // 创建用户
  async create (user) {
    let result = await dbUtil.insertData('user', user)
    return result
  },
  // 查看用户是否存在
  async getUserExist (user) {
    let sql = `SELECT * FROM user WHERE username="${user.username}"`
    let result = await dbUtil.query(sql)
    new UserPo(result[0])
    if (result.length > 0) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },
  // 根据账号、密码查找用户
  async getUserByUsernameAndPassword (user) {
    let sql = `
      SELECT * FROM user WHERE username="${user.username}" and password="${user.password}";
    `
    console.log('sq', sql)
    let result = await dbUtil.query(sql)
    console.log('result', result)
    console.log(result.map((user) => new UserPo(user)))
  }
}