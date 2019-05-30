const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const { query } = require('./utils/dbUtil');

const app = new Koa();

app.use(bodyParser());

app.use(async (ctx) => {
  console.log(ctx.url);
  if (ctx.url === '/') {
    let result = await query('select * from article');
    console.log(result);
    ctx.body = {
      msg: '成功'
    }
  }
})

app.listen(7788, function () {
  console.log('listeing;');
})