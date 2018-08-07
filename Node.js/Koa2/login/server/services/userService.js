const userModel = require('../models/userModel')

module.exports = {
  async login (user) {
    let result = await userModel.getUserByUsernameAndPassword(user)
    return result
  },
  // 注册
  async register (user) {
    // 判断是否存在
    let isExist = await userModel.getUserExist(user)
    // 用户名不存在则可以注册
    if (!isExist) {
      return await userModel.create(user)
    } else {
      return false
    }
  }
}