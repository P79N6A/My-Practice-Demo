const Router = require('koa-router');
const { getAllArticles, getOneArticleController, addArticleController, modifyArticleController, deleteArticleController, } = require('../controllers/ArticleController')
const { getCommentsController, addCommentController, deleteCommentController } = require('../controllers/commentController');
const { loginController } = require('../controllers/UserController');
const { loggerTest } = require('../utils/log');

// 用户登录
let user = new Router();
user.post('/login', loginController);

// 文章
let article = new Router();
article.get('/', getAllArticles);
article.get('/:articleId', getOneArticleController);
article.post('/', addArticleController);
article.put('/:articleId', modifyArticleController);
article.delete('/:articleId', deleteArticleController);

// 评论
let comments = new Router();
comments.get('/', getCommentsController);
comments.post('/', addCommentController);
comments.delete('/:commentId', deleteCommentController);

// test
let test = new Router();
test.get('/', async (ctx) => {
  loggerTest.debug('Time', new Date());
  ctx.body = {
    msg: 'test',
  }
});

// 组装所有 router
let router = new Router();
router.use('/user', user.routes(), user.allowedMethods());  
router.use('/articles', article.routes(), article.allowedMethods());
router.use('/comments', comments.routes(), comments.allowedMethods());
router.use('/test', test.routes(), test.allowedMethods());

module.exports = router;
