const { loginService, registerService } = require('../service/UserService')

// 登录
async function loginController (response, data) {
  // 检验数据，这里先忽略咯
  // console.log(data)
  const result = await loginService(data)
  response.writeHead(200, { 'Content-Type': 'application/json' })
  let resultObj
  if (result) {
    resultObj = {
      message: '登录成功',
      success: true
    }
    
  } else {
  let resultObj = {
      message: '用户名或密码错误',
      success: false
    }
    response.end(JSON.stringify(resultObj))
  }
  response.end(JSON.stringify(resultObj))
}

// 注册
async function registerController (response, data) {
  const result = await registerService(data)
  response.writeHead(200, {'Content-Type': 'application/json'})
  let resultObj
  if (result) {
    resultObj = {
      success: true,
      message: '注册成功'
    }
  } else {
    resultObj = {
      success: false,
      message: '用户名已存在'
    }
  }
  response.end(JSON.stringify(resultObj))
}

module.exports = {
  loginController,
  registerController
}