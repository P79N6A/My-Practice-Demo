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

function* gen () {
  var a = yield [ Promise.resolve(1),
    Promise.resolve(2)]
  console.log(a)
}

var g = gen()
console.log(g.next())