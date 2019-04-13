const { loginDao, registerDao } = require('../dao/UserDao')

async function loginService (data) {
  const result = await loginDao(data)
  return result && result.length > 0 ? true : false
}

async function registerService (data) {
  const result = await registerDao(data).catch(err => false)
  return result
}

module.exports = {
  loginService,
  registerService
}