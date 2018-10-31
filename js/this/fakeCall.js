// 模拟实现 call（apply 类似）
// 如果木有传入 context 对象，就默认为 window
// 要在新对象上调用指定函数（原来的 this 就是指代指定函数）
// 可以把思路转为：给新对象加一个函数，然后再删除该对象
// fn.call(ctx, arg1, arg2, ...)

Function.prototype.myCall = function (context) {
  var ctx = context || window
  // 给新对象添加函数（要调用的那个函数）
  ctx.fn = this
  // 提取参数（不要第一个参数，那个是 ctx）
  var args = [...arguments].slice(1)
  // 调用函数
  var result = ctx.fn(args)
  // 删除添加的函数
  delete ctx.fn
  return result
}

var obj = {
  a: 1
}
function test () {
  console.log(this.a)
}

test.myCall(obj)