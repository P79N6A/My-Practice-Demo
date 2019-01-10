// function list () {
//   return Array.prototype.slice.call(arguments, 2, 4)
// }

// console.log(list(1,2,3,4))


// 数组拼接
// var arr1 = [1, 2, 3]
// var arr2 = [4, 5, 6]
// Array.prototype.push.apply(arr1, arr2)
// console.log(arr1)
// var arr3 = []
// arr3.push(...arr2)
// console.log(arr3)


// bind
// var test = function() {
//   console.log(this.x)
// }

// var o1 = {
//   x: 1
// }
// var o2 = {
//   x: 2
// }
// var o3 = {
//   x: 3
// }

// var t = test.bind(o1).bind(o2).bind(o3)
// t()



// 函数柯里化
// function curry (fn) {
//   // 获取参数
//   var args = Array.prototype.slice.call(arguments, 1)

//   return function () {
//     var newArgs = Array.prototype.slice.call(arguments)
//     return fn.call(null, ...args, ...newArgs)
//   }
// }

// function add (m, n) {
//   return m + n
// }

// var f = curry(add, 1)
// console.log(f(2)) // 3