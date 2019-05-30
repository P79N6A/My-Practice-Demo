const { query } = require('../utils/dbUtil');

// 查询所有文章
const getAllArticlesModel = async (pageNo, pageSize, tags, searchText) => {
  let offset = (pageNo - 1) * pageSize;
  let sql = `
    SELECT * FROM article LIMIT ${offset}, ${pageSize};
  `
  
  let result = await query(sql);
  result = result.map(article => {
    article.content = article.content.slice(0, 50);
    return article;
  })
  return result;
}

// 获取文章数量
const getTotalArticlesModel = async () => {
  let sql = `
    SELECT COUNT(*) FROM article;
  `
  let result = await query(sql);
  return result[0]['COUNT(*)'];
}

// 获取某一篇文章
const getOneArticleModel = async (articleId) => {
  let sql = `
    SELECT * FROM article WHERE article_id=${articleId};
  `
  let result = await query(sql);
  if (Array.isArray(result) && result.length > 0) {
    result = result[0];
  } else {
    result = null;
  }
  return result;
}

// 添加文章
const addArticleModel = async (title, content, citme, mtime) => {
  let sql = `
  INSERT INTO article(title, content, ctime, mtime) VALUES('${title}', '${content}', '${citme}', '${mtime}');
  `
  let result = await query(sql);
  return result ? true : false;
}

// 修改文章
const modifyArticleModel = async (articleId, title, content, tags, mtime) => {
  let sql = `
    UPDATE article SET title="${title}", content="${content}", mtime=${mtime} WHERE article_id=${articleId};
  `
  console.log(sql);
  let result = await query(sql);
  return result && result.affectedRows >= 1;
}

// 删除文章
const deleteArticleModel = async (articleId) => {
  let sql = `
    DELETE FROM article WHERE article_id=${articleId};
  `;
  let result = await query(sql);
  return result && result.affectedRows >= 1;
}

module.exports = {
  getAllArticlesModel,
  getTotalArticlesModel,
  getOneArticleModel,
  addArticleModel,
  modifyArticleModel,
  deleteArticleModel,
}