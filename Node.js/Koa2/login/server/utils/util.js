/**
 * 判断操作是否成功（根据数据是否大于零来判断）
 * @param { Array } result 
 */
function isSuccess (result) {
  // 如果不是数组，转换成数组
  if (result.length === undefined) {
    result = [result]
  }
  console.log('result', result)
  return result.length > 0 ? true : false
}

module.exports = {
  isSuccess
}