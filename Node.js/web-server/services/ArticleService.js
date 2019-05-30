const { addArticleModel, getAllArticlesModel, getTotalArticlesModel, getOneArticleModel, modifyArticleModel, deleteArticleModel } = require('../models/article');

// 获取所有文章
const getAllArticles = async (pageNo, pageSize, tags, searchText, ctx) => {
  let data = await getAllArticlesModel(pageNo, pageSize, tags, searchText, ctx);
  let total = await getTotalArticlesModel();
  return {
    data,
    total,
  }
}

// 获取某篇文章
const getOneArticleService = async (articleId) => {
  let result = await getOneArticleModel(articleId);
  return {
    data: result,
  };
}

// 创建文章
const addArticleService = async (title, content) => {
  let now = +new Date();
  let result = await addArticleModel(title, content, now, now);
  return result;
}

// 修改文章
const modifyArticleService = async (articleId, title, content, tags, mtime) => {
  let result = await modifyArticleModel(articleId, title, content, tags, mtime);
  return result;
}

// 删除文航
const deleteArticleService = async (articleId) => {
  let result = await deleteArticleModel(articleId);
  return  result;
}

module.exports = {
  getAllArticles,
  getOneArticleService,
  addArticleService,
  modifyArticleService,
  deleteArticleService,
}