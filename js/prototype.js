function A () {
  this.x = 1
}
A.prototype.y = 2

var a = new A()
for (let key in a) {
  console.log(key)
}