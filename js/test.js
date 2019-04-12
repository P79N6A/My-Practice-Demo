//
function parseToHouZhui (str) {
  // 存放操作符
  var stack = []
  // 存放输出结果
  var result = []
  var len = str.length
  var i = 0

  while (i < len) {
    if (typeof +str[i] === NaN) {
      var signal = str[i]
      // 判断栈顶元素优先级
      if (signal === ')') {
        // 全部出栈输出，直到遇到左括号
        while (stack[result.length - 1] !== '(') {
          result.push(stack.pop())
        }
        // 左括号出栈
        stack.pop()
      } else if (signal === '(') {
        // 栈顶是左括号的话，直接进栈
        stack.push(signal)
      } else if ()
    } else {
      result.push[str[i]]
    }
    i++
  }
}