const Koa = require('koa')
const app = new Koa()

const port = 5000

app.use(async (ctx) => {
  if (ctx.url === '/') {
    // 这个应该就是 koa 配好的了
    // 返回对象，会自动转为 json
    // 返回 html，就会返回 html 咯
    ctx.body = `
      <h1>haha</h1>
    `
  } 
})

app.listen(port, () => {
  console.log(`port ${port} is listening`)
})