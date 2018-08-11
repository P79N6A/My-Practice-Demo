/**
 * 这个是 Stack 类
 * @param {} items 
 */

function Stack (items) {
  this.items = items
}

Stack.prototype.push = function (ele) {
  this.items.push(ele)
}
Stack.prototype.pop = function (ele) {
  this.items.pop(ele)
}
Stack.prototype.peek = function (ele) {
  return this.items[this.items.length-1]
}
Stack.prototype.isEmpty = function (ele) {
  return this.items.length === 0
}
Stack.prototype.clear = function (ele) {
  this.items = []
}
Stack.prototype.print = function (ele) {
  console.log(this.items)
}
Stack.prototype.size = function (ele) {
  return this.items.length
}

var stack = new Stack([1,2,3])
stack.push(4)
stack.print()
stack.clear()
stack.peek()