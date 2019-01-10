// // 返回一个函数
// // 返回的函数调用后，需要返回原来函数的调用结果
// // 保存 bind 和 bind 后传入的参数
// // 保存 bind 的 this 对象
// Function.prototype.bind = function (ctx) {
//   var fn = this
//   var args = [...arguments].slice(1)

//   return function () {
//     return fn.apply(ctx, [...args, ...arguments])
//   }
// }

// var obj = {
//   a: 1
// }

// function test () {
//   console.log(this.a)
//   console.log([...arguments])
// }

// var testBind = test.bind(obj, 1, 2, 3)
// testBind(4, 5, 6)



function fakeBind (context) {
  // 获取 this
  var ctx = context || window
  // 获取参数
  var args = [...arguments].slice(1)

  ctx.fn = this
  return function () {
    var newArgs = [...arguments].slice()
    var result = ctx.fn(...args, ...newArgs)
    delete ctx.fn
    return result
  }
}

Function.prototype.fakeBind = fakeBind
var o = {x: 1}

function test () {
  console.log(this)
  console.log(arguments)
}

test.fakeBind(o, 1, 2, 3)(4, 5, 6)
