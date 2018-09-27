function Foo () {}

Foo.prototype.getF = function () {
  console.log(1)
}
Foo.getF = function () {
  console.log(2)
}


new Foo.getF() // 2

new Foo().getF() // 1