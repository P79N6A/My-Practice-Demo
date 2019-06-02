const { getOneArticleService, addArticleService, modifyArticleService, deleteArticleService } = require('../services/ArticleService');
const ArticleService = require('../services/ArticleService');
const { response, responseWith200, responseWith400, responseWith403, responseWith404, isNumber, isArray } = require('../utils/util');
const { query } = require('../utils/dbUtil');

// 获取文章列表
const getAllArticles = async (ctx) => {
  let { pageNo, pageSize, tags, searchText } = ctx.query;
  // 检查参数
  if (!pageNo || !pageSize || pageNo <= 0 || pageSize <= 0) {
    responseWith400(ctx, '参数错误');
    return;
  }
  // 处理请求参数
  let result = await ArticleService.getAllArticles(pageNo, pageSize, '', '', ctx);
  if (result) {
    responseWith200(ctx, '请求成功', result);
  } else {
    responseWith403(ctx, '请求失败');
  }
}

// 获取某一篇文章
const getOneArticleController = async (ctx) => {
  // 参数检查
  let { articleId } = ctx.params;
  articleId = +articleId;
  if (!articleId) {
    response(ctx, 400, {
      success: false,
      msg: '参数错误',
      code: 400,
    });
    return;
  }
  if (!isNumber(articleId)) {
    response(ctx, 400, {
      success: false,
      msg: '参数类型错误',
      code: 400,
    });
    return;
  }
  let result = await getOneArticleService(articleId);
  if (result) {
    responseWith200(ctx, '请求成功', result);
  } else {
    responseWith404(ctx, '请求文章不存在', result);
  }
  return;
}

// 创建文章
const addArticleController = async (ctx) => {
  // 判断请求参数是否合理，那些必填的不能为空
  let { title, content } = ctx.request.body;
  if (!title || !content) {
    response(ctx, 400, {
      success: false,
      msg: '参数错误了鸭',
    });
    return;
  }
  
  const result = await addArticleService(title, content, ctx);
  if (result) {
    response(ctx, 200, {
      success: true,
      msg: '创建成功',
    });
    return;
  }
}

// 修改文章
const modifyArticleController = async (ctx) => {
  // 检查参数
  let { articleId } = ctx.params;
  let { title, content, tags } = ctx.request.body;
  tags = (tags && JSON.parse(tags)) || [];
  if (!articleId || !isNumber(+articleId) || !title || !content || !isArray(tags)) {
    response(ctx, 400, {
      msg: '参数错误',
      success: false,
      code: 400,
    });
    return;
  }

  let now = +new Date();
  let result = await modifyArticleService(articleId, title, content, tags, now);
  if (result) {
    response(ctx, 200, {
      msg: '修改成功',
      success: true,
      code: 200,
    });
    return;
  } else {
    response(ctx, 500, {
      msg: '修改失败',
      success: false,
      code: 400,
    });
  }
}

// 删除文章
const deleteArticleController = async (ctx) => {
  // 参数检查
  let { articleId } = ctx.params;
  articleId = +articleId;
  if (!articleId) {
    response(ctx, 400, {
      success: false,
      msg: '参数错误',
      code: 400,
    });
    return;
  }
  if (!isNumber(articleId)) {
    response(ctx, 400, {
      success: false,
      msg: '参数类型错误',
      code: 400,
    });
  }

  let result = await deleteArticleService(articleId);
  if (result) {
    response(ctx, 200, {
      success: true,
      msg: '删除成功',
      code: 200,
    });
  } else {
    responseWith404(ctx, '删除失败，文章不存在');{}
  }
}

module.exports = {
  getAllArticles,
  getOneArticleController,
  addArticleController,
  modifyArticleController,
  deleteArticleController,
}