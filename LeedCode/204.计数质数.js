/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */
var countPrimes = function(n) {
  if (n < 3) {
      return false
  }
  let count = 0
  let result = new Array(n).fill(1)
  result[0] = 0
  result[1] = 0
  result[2] = 1
  for (let i = 2, len = result.length; i < len; i++) {
      // 把所有当前是质数的，它的倍数全部设置为 0
      // 1表示质数，0表示非质数
      if (result[i] === 1) {
          let j = i
          while (j < len) {
              j *= i
              result[j] = 0
              console.log(j)
          }
          count++
      }
  }
  return count
};

