const { response } = require('../utils/util');
const { loginService } = require('../services/UserService');

// session 处理

const loginController = async (ctx) => {
  // 判断是否有账号密码
  let postData = ctx.request.body
  // console.log(ctx.request);
  console.log(postData);
  if (!postData.username || !postData.password) {
    response(ctx, 400, {
      success: false,
      msg: '用户名或密码不能为空'
    });
    return;
  }

  // 重新封装 po
  let user = {
    username: postData.username,
    password: postData.password,
  }
  let result = await loginService(user);
  if (result) {
    // ctx.cookies.set(
    //   'session_id', 
    //   123,
    //   {
    //     domain: 'localhost',  // 写cookie所在的域名
    //     path: '/index',       // 写cookie所在的路径
    //     maxAge: 10 * 60 * 1000, // cookie有效时长
    //     expires: new Date('2020-02-15'),  // cookie失效时间
    //     httpOnly: false,  // 是否只用于http请求中获取
    //     overwrite: false  // 是否允许重写
    //   }
    // );
    response(ctx, 200, {
      success: true,
      msg: '登录成功',
    })
    return;
  } else {
    response(ctx, 200, {
      success: false,
      msg: '用户名或密码错误',
    })
    return;
  }
}

module.exports = {
  loginController,
}