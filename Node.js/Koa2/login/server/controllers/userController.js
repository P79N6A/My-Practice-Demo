const userService = require('../services/userService')
const util = require('../utils/getBodyData')
const userCode = require('../codes/user')

module.exports = {
  // 登录
  async login (ctx) {
    let user = util.getBodyData(ctx)
    let result = await userService.login(user)
    if (result.length > 0) {
      ctx.body = {
        success: true,
        message: userCode.LOGIN_SUCCESSS,
        data: {
          username: result[0].username
        }
      }
    } else {
      ctx.body = {
        success: false,
        message: userCode.USERNAME_OR_PASSWORD_WRONG_ERROR,
        data: {}
      }
    }
    
  },
  // 注册
  async register (ctx) {
    let repResult = {}
    let user = util.getBodyData(ctx)
    let result = await userService.register(user)
    if (result) {
      ctx.body = {
        success: true,
        data: {
          username: user.username
        },
        message: userCode.REGISTER_SUCCESS
      }
    } else {
      ctx.body = {
        success: false,
        message: userCode.USERNAME_EXIST_FAIL
      }
    }
  }
}