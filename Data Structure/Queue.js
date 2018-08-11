function Queue (items) {
  this.items = items
}

Queue.prototype.enqueue = function (elem) {
  this.items.push(elem)
}
Queue.prototype.dequeue = function (elem) {
  return this.items.shift()
}
Queue.prototype.front = function (elem) {
  return this.items[0]
}
Queue.prototype.isEmpty = function (elem) {
  return this.items.length === 0
}
Queue.prototype.clear = function (elem) {
  this.items = []
}
Queue.prototype.size = function (elem) {
  return this.items.length
}
Queue.prototype.print = function (elem) {
  console.log(this.items.toString())
  // console.log(this.items.join(','))
}
