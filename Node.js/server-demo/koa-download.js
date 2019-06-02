const Koa = require('koa');
const send = require('koa-send');
const app = new Koa();

app.use(async ctx => {
  if (ctx.path === '/download') {
    ctx.set({
      'Content-Disposition': 'attachment; filename=123.js'
    })
    await send(ctx, 'koa-download.js')
  }
})

app.listen(7777, () => {
  console.log('port 7777 is listening');
});