const { query } = require('../utils/dbUtil');



// 查看某篇文章的评论
const addCommentModel = async (articleId, content, ctime, mtime) => {
  let sql = `
    INSERT INTO comment(content, article_id, ctime, mtime) values('${content}', ${articleId}, ${ctime}, ${mtime});
  `;
  let result = await query(sql);
  return result && result.affectedRows;
}

// 查看文章的当前页的评论
const getCommentsModel = async ({articleId, pageNo, pageSize}) => {
  let offset = (pageNo - 1) * pageSize;
  let sql = `
    SELECT * FROM comment WHERE article_id=${articleId} LIMIT ${offset}, ${pageSize};
  `;
  console.log(sql);
  let result = await query(sql);
  if (Array.isArray(result) && result.length > 0) {
    // 重新组装成一个 model
    result = result;
  } else {
    result = null;
  }
  return result;
}

// 查看文章的评论数
const getTotalCommentsModel = async (articleId) => {
  let sql = `
    SELECT COUNT(*) FROM comment WHERE article_id=${articleId};
  `;
  let result = await query(sql);
  return result[0]['COUNT(*)'];
}

// 删除评论
const deleteCommentModel = async (commentId) => {
  let sql = `
    DELETE FROM comment WHERE comment_id=${commentId};
  `
  let result = await query(sql);
  return result && result.affectedRows >= 1
}

module.exports = {
  addCommentModel,
  getCommentsModel,
  getTotalCommentsModel,
  deleteCommentModel,
}