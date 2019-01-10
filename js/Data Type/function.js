// function test () {}

// var t = new Function()

// // 块级作用域
// {
//   if (true) {
//     function a () {}
//   } else {
//     function b () {}
//   }
// }
// console.log(a) // ƒ a () {}
// console.log(b) // undefined


// {
//   var a = undefined
//   var b = undefined
//   if (true) {
//     a = function a () {}
//   } else {
//     b = function b () {}
//   }
// }
// console.log(a)
// console.log(b)


// // 函数那些事儿
// // 参数、默认值
// let x = 1
// function test (a = x) {
//   var x = 2
//   console.log(a)
//   var a = 100
//   console.log(a)
// }
// test() // 1
// test(100) // 100

// // arguments 对象
// // function test (...rest) {
// //   console.log(arguments)
// //   console.log(arguments.length)
// //   console.log(rest)
// //   console.log(...arguments)
// // }
// // test(1, 2, 3, 4)

// // name
// // function test () {}
// // console.log(test.name)

// // var b = function a () {}
// // console.log(b.name)

// // var c = () => {}
// // console.log(c.name)


// var y
// function m (a = y) {
//   console.log(y)
//   console.log(a)
//   var y = 100
// }
// m()


// function test () { console.log('ha') }
// var a = function test () { console.log('xixi') }
// a()


// // var test = () => {
// //   console.log(this)
// // }
// // var o = new test()

// var t = (...rest) => {
//   console.log(rest)
// }
// t(1)

// var t = () => {}
// console.log(t.prototype)


// 尾调用
// 'use strict'
// function test () {
//   function a () {
//     return 5
//   }

//   return a()
// }
// test()

// function test (m) {
//   if (m == 0) {
//     return 0
//   } else {
//     return test(--m)
//   }
// }
// test(5)



// function test (x = 10, y, z) {
//   {
//     let k
//     y = function 
//   }
//   // y()
//   // console.log(x)
//   var y
//   // var z
//   console.log(x)
// }
// debugger
// test()

// function test (c, a = 2, b) {
//   console.log(c)
//   console.log(a)
//   console.log(b)
//   console.log(arguments)
// }

// test(1)


// let x = 1

function test (y = x) {
  console.log(y)
  console.log(x)
}

test() // 1