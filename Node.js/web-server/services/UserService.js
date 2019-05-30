const { getOneByUsernameAndPassword } = require('../models/user');

// 登录
const loginService = async (user) => {
  let result = await getOneByUsernameAndPassword(user);
  return result;
}

module.exports = {
  loginService,
}