var str = '(3+4)*5-6'

function parseToHouZhui (str) {
  // 有符号，就要考虑优先级，优先级大于栈顶的就压入
  // 优先级小于等于栈顶的，就让栈顶元素出栈
  // 左括号优先级最高直接入栈，之后如果有操作符，也直接入栈
  // 之后如果有右括号，就一直出栈，直到将左括号出栈（左右括号都不输出，只出栈）
  // 当匹配到 str 的最后一个字符的时候，就停止。
  var stack = []
  var result = []
  var i = 0
  var len = str.length
  while (i < len) {
    // 如果是操作符，就按照上面说的..
    if (+str[i] === NaN) {
      stack.push(str[i])
    } else {
      // 如果是操作数，就直接输出到 result
      result.push(str[i])
    }
    i++
  }
}