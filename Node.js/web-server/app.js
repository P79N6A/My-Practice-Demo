const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./routers/index');

const app = new Koa();

app.use(bodyParser());

// key(session_id): value({ user: {}, expireTime: new Date() + sessionLife })
const sessionLife = 1000000;

let sessionStore = {
  'test': {
    user: {
      username: 'test',
      password: 'test',
    },
    expireTime: +new Date() + sessionLife
  }
}
function createSession (user) {
  // 简单算法
  console.log();
  sessionStore[user.username + new Date()] = {
    user: {
      username: '1234',
      password: '12345',
    },
    expireTime: +new Date() + sessionLife,
  }
}

function updateSession (sessionId) {
  let session = sessionStore[sessionId];
  if (session) {
    // 判断是否过期
    let now = +new Date();
    console.log('test');
    console.log('expireTIme', session.expireTime);
    console.log('now', now);
    if (session.expireTime < now) {
      // 过期就要求重新登录了，并且删除对应的 session
    } else {
      // 没过期就更新过期时间
      session.expireTime = now + sessionLife
      console.log('更新时间鸭');
    }
  } else {
    // 没有 session，要求重新登录
  }
}

// 过滤请求，用来处理 cookie 问题
app.use(async (ctx, next) => {
  await next();
  // console.log(ctx.cookies.get('session_id'));
  // if ((ctx.cookies && ctx.cookies.get('session_id')) || ctx.url === '/user/login') {
  //   // 有 cookie 哟，更新 session 过期时间
  //   updateSession(ctx.cookies.get('session_id'));
  //   console.log(sessionStore['test']);
  //   await next();
  // } else {
    // 设置 cookie
    // ctx.cookies.set(
    //   'session_id', 
    //   '123456',
    //   {
    //     domain: 'localhost',  // 写cookie所在的域名
    //     path: '/index',       // 写cookie所在的路径
    //     maxAge: 10 * 60 * 1000, // cookie有效时长
    //     expires: new Date('2020-02-15'),  // cookie失效时间
    //     httpOnly: false,  // 是否只用于http请求中获取
    //     overwrite: false  // 是否允许重写
    //   }
    // );
  //   ctx.body = {
  //     success: false,
  //     msg: '未登录',
  //     code: 900, // 和前端协商的自定义状态码，表示未登录
  //   }
  // }
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(7777, () => {
  console.log('7777 is listening');
})

