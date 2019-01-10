// 判断输入的字符串是否是回文字符串
// 方法一
function isHuiwen (str) {
  if (typeof str !== 'string') {
    return false
  }
  var len = str.length
  if (len % 2 !== 0) {
    return false
  }

  var mid = len / 2
  for (var i = 0; i < mid; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false
    }
  }
  return true
}
console.log(isHuiwen('whnccnhw'))

// 方法二
function isHuiwen2 (input) {
  return input.split('').reverse().join('') === input
}
console.log(isHuiwen2('whnccnhw'))
