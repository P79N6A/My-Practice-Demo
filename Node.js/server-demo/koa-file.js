const Koa = require('koa');
const body = require('koa-better-body');
const app = new Koa();

app.use(body());
app.use(async ctx => {
  console.log(ctx.request.body);  // if buffer or text
  console.log(ctx.request.files); // 文件
  console.log(ctx.request.fields); // if json、urlencoded、multipart 非文件部分
})

app.listen(7777, () => {
  console.log('port 7777 is listening');
});