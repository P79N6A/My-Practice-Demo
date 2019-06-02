const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const Router = require('koa-router');
const app = new Koa();

app.use(bodyparser());


const Router = require('koa-router');
// article 路由
let article = new Router();
article.get('/:id', getArticle);
article.post('/', addArticle);

// 统一所有路由
let router = new Router();
router.use('/article', article.routes(), article.allowedMethods());

app.use(router.routes(), router.allowedMethods());


app.listen(7777, () => {
  console.log('port 7777 is listening');
});

const getArticle = async (ctx) => {
  // 通过 url 路径的目录的正则，来获取参数
  const params = ctx.params;
  // 通过 url 中的查询字符串获得
  const query = ctx.query;
}

const addArticle = async (ctx) => {
  // 通过 koa-bodyparser 来获取 post 的 urlencode 内容
  const postData = ctx.request.body;
  // 其他 content-type 的获取：未完待续...
}