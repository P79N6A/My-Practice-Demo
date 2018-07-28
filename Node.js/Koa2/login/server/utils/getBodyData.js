// 获取 post 的数据
function getBodyData(ctx) {
  let body
  if (ctx.method === 'GET') {
    body = ctx.request.query
  } else if (ctx.request.header['content-type'] === 'application/x-www-form-urlencoded') {
    // 判断是否是 form 表单
    // 因为用那个 koa-bodyparser，当传的是表单的时候，需要这样拿数据...
    for (let key in ctx.request.body) {
      body = key
    } 
  } else {
    body = ctx.request.body
  }
  return JSON.parse(body)
}

module.exports = {
  getBodyData
}