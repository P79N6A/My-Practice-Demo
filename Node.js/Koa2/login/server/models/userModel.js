const dbUtil = require('../utils/dbUtil')
const UserPo = require('../po/userPo')
const util = require('../utils/util')

module.exports = {
  // 创建用户
  async create (user) {
    let sql = `
      insert into user (username, password) values ("${user.username}", "${user.password}") 
    `
    let result = await dbUtil.query(sql)
    return util.isSuccess(result)
  },
  // 查看用户是否存在
  async getUserExist (user) {
    let sql = `SELECT * FROM user WHERE username="${user.username}"`
    let result = await dbUtil.query(sql)
    console.log('ex', result)
    return util.isSuccess(result)
  },
  // 根据账号、密码查找用户
  async getUserByUsernameAndPassword (user) {
    let sql = `
      SELECT * FROM user WHERE username="${user.username}" and password="${user.password}";
    `
    let result = await dbUtil.query(sql)
    result = result.map((user) => new UserPo(user))
    return result
  }
}