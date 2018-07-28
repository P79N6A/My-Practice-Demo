const dbUtil = require('../utils/dbUtil')

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
    if (result.length > 0) {
      result = result[0]
    } else {
      result = null
    }
    return result
  }
}