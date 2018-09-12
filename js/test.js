// var obj = {
//   a: {
//     b: {
//       c: {
//         d: 'hahaha'
//       }
//     }
//   }
// }
// var oldTime = +new Date()
// for (var i = 0; i < 1000; i++) {
//   console.log(1)
// }
// var newTime = +new Date()
// console.log('time ', newTime - oldTime)

// var oldTime = +new Date()
// for (var i = 0; i < 1000; i++) {
//   var a = 1
//   b = 1
//   if (a === b) {
//     console.log('xixi')
//   }
// }
// var newTime = +new Date()
// console.log('time ', newTime - oldTime)

// var arr = [1,2,3,4]
// var a = arr.reduce((prev, currv) => {
//   console.log('pr', prev)
//   console.log('c', currv)
//   return prev + currv
// })

// console.log(a)

// function de (delay) {
//   console.log('delay', delay)
  
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`延迟${delay}执行啦`)
//       resolve(delay)
//     }, delay)
//   })
// }

// async function test () {
//   var timers = [3000, 4000, 2000, 1000]
//   var t = timers.map(async delay => {
//     var m = await de(delay)
//     return m
//   })
  
//   for (var item of t) {
//     console.log('item', await item)
//   }
// }

// test()


(function () {
  function foo () {
    console.log('function')
  }
  var foo = undefined

  console.log(foo) // undefined
}())

(function () {
  console.log(aaa)
  aaa = 100
}())