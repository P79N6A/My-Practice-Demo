const Router = require('koa-router');

// test 路由
let test = new Router();
test.get('/', async (ctx) => console.log('test get'));
test.post('/', async (ctx) => console.log('test post'));

// demo 路由
let demo = new Router();
demo.get('/', async (ctx) => ctx);
demo.post('/', async (ctx) => ctx);

// 统一所有路由
let router = new Router();
router.use('/test', test.routes(), test.allowedMethods());
router.use('/demo', demo.routes(), demo.allowedMethods());

module.exports = router;