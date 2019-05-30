const { addCommentModel, getCommentsModel, getTotalCommentsModel, deleteCommentModel } = require('../models/commentModel');

// 添加评论
const addCommentService = async (articleId, content, ctime, mtime) => {
  let result = await addCommentModel(articleId, content, ctime, mtime);
  return result;
}

// 查看所有评论
const getCommentsService = async ({pageNo, pageSize, articleId}) => {
  let data = await getCommentsModel({pageNo, pageSize, articleId});
  let total = await getTotalCommentsModel(articleId);
  return {
    data,
    total
  };
}

// 删除评论
const deleteCommentService = async (commentId) => {
  let result = await deleteCommentModel(commentId);
  return result;
}

module.exports = {
  addCommentService,
  getCommentsService,
  deleteCommentService,
}