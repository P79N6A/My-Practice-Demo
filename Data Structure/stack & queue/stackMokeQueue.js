function Stack () {
  this.stack = []
}

Stack.prototype.push = function (node) {
  this.stack.push(node)
}
Stack.prototype.pop = function () {
  return this.stack.pop()
}
Stack.prototype.isEmpty = function () {
  return this.getLength() === 0 ? true : false
}
Stack.prototype.getLength = function () {
  return this.stack.length
}


var stack1 = new Stack()
var stack2 = new Stack()

function push (node) {
  stack1.push(node)
}
function pop () {
  // 如果 stack2 不为空，就先让 stack2 的出栈
  if (!stack2.isEmpty()) {
    return stack2.pop()
  }

  // 让 stack1 的全部都到 stack2 上
  if (!stack1.isEmpty()) {
    for (var i = 0, len = stack1.getLength(); i < len; i++) {
      stack2.push(stack1.pop())
    }
    
    return stack2.pop()
  }
}

