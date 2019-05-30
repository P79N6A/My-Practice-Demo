const { response, responseWith200, responseWith403, responseWith400, responseWith404, isNumber } = require('../utils/util');
const { addCommentService, getCommentsService, deleteCommentService } = require('../services/commentService');

// 添加评论
const addCommentController = async (ctx) => {
  // 检查参数
  let { articleId, content } = ctx.request.body;
  articleId = +articleId;
  if (!articleId || !content) {
    responseWith400(ctx, '参数错误');
    return;
  }
  if (!isNumber(articleId)) {
    responseWith400(ctx, '参数类型错误');
    return;
  }

  let now = +new Date();
  let result = await addCommentService(articleId, content, now, now);
  if (result) {
    responseWith200(ctx, '添加评论成功');
  } else {
    responseWith403(ctx, '添加评论失败');
  }
}

// 查看所有评论
const getCommentsController = async (ctx) => {
  // 检查参数
  let { articleId, pageNo, pageSize } = ctx.query;
  articleId = +articleId;
  pageNo = +pageNo;
  pageSize = +pageSize;
  if (!articleId || !pageNo || !pageSize || !isNumber(articleId) || !isNumber(pageNo) || !isNumber(pageSize)) {
    responseWith400(ctx, '参数错误');
    return;
  }

  let result = await getCommentsService({ pageSize, pageNo, articleId });
  if (result) {
    responseWith200(ctx, '请求成功', result);
  } else {
    responseWith403(ctx, '请求错误');
  }
}

// 删除评论
const deleteCommentController = async (ctx) => {
  // 检查参数
  let { commentId } = ctx.params;
  console.log(commentId);
  commentId = +commentId;
  if (!commentId || !isNumber(commentId)) {
    responseWith400(ctx, '参数错误');
    return;
  }

  let result = await deleteCommentService(commentId);
  if (result) {
    responseWith200(ctx, '删除成功');
  } else {
    responseWith404(ctx, '删除失败，文章不存在');
  }
}

module.exports = {
  addCommentController,
  getCommentsController,
  deleteCommentController,
}