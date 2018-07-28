const userService = require('../services/userService')
const util = require('../utils/getBodyData')
const userCode = require('../codes/user')

module.exports = {
  // 登录
  async login (ctx) {
    console.log(ctx);
    ctx.body = {
      success: true,
      data: {
        name: 'qingtian'
      }
    }
  },
  // 注册
  async register (ctx) {
    let repResult = {}
    let user = util.getBodyData(ctx)
    let result = await userService.register(user)
    if (result.serverStatus === 2) {
      ctx.body = {
        success: true,
        data: {
          username: user.username
        },
        message: '注册成功'
      }
    } else {
      ctx.body = {
        success: true,
        message: userCode.FAIL_USERNAME_EXIST
      }
    }
  }
}