// function Cat (x) {
//   this.x = x
//   return {}
// }

// var cat = new Cat(123)
// console.log(cat) // {}

// function create () {
//   // 创建新对象
//   var obj = {}
//   // 获取原型
//   Con = [].shift.call(arguments)
//   // 连接新对象到原型
//   obj.__proto__ = Con.prototype
//   // 绑定 this
//   Con.apply(obj, arguments)
//   // 返回新对象
//   return obj
// }

// function Test (x, y) {
//   this.x = x
//   this.y = y
// }

// var t = create(Test, 1, 2)
// console.log(t)

function Foo () {
  return this
}
Foo.getName = function () {
  console.log(1)
}
Foo.prototype.getName = function () {
  console.log(2)
}

new Foo.getName() // 1
new Foo().getName() // 2