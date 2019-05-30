const { query } = require('../utils/dbUtil');

const getOneByUsernameAndPassword = async (user) => {
  let sql = `
    SELECT * FROM USER WHERE username='${user.username}' and password='${user.password}';
  `
  let result = await query(sql);
  if (Array.isArray(result) && result.length > 0) {
    result = result[0];
  } else {
    result = null;
  }
  return result;
}

module.exports = {
  getOneByUsernameAndPassword,
}