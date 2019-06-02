const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.status = 200;
  ctx.set({
    'Content-Type': 'text/plain',
  })
  ctx.body = '<h1>xixi</h1>'
})

app.listen(7777, () => {
  console.log('port 7777 is listening');
});