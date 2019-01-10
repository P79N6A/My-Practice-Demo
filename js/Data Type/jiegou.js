var o = {
  o1: 'aaa',
  o2: 'bbb'
}

var o1 = 1000
var { o3, o1 } = o
console.log(o1) // aaa
console.log(o3) // undefined

var { o1: o2 } = o
console.log(o2)

var { o1 = 1, o3 = 'hhh'} = o
console.log(o1)
console.log(o3)

var { o1 = 1 } = {o1: undefined}
console.log(o1)

var { o1 } = 123 


// 扩展运算符
var o = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}
var { a, d, ...c } = o
console.log(c) // { b: 2, c: 3 }


// 数组
var [a = 1] = [undefined]
console.log(a)


var x = 1;
var y = 2;
[x, y] = [y, x]
console.log(x, y)


// 函数默认值
function test (x, y = function () { x = 2 }) {
  var x
  y()
  console.log(x)
  return x
}
test()

function test (x, y) {
  if (typeof y === undefined) {
    y = function () { x = 2}
  }

  return function () {
    var x
    y()
    console.log(x)
  }.apply(this, arguments)
}