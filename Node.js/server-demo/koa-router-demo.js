const Koa = require('koa');
const router = require('./router');
const app = new Koa();

app.use(router.routes(), router.allowedMethods());

app.listen(7777, () => {
  console.log('port 7777 is listening');
})
