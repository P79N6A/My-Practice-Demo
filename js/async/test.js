// var p = new Promise(resolve => resolve(1))

// var p1 = p.then(v => {
//   return obj
// })

// // thenable object
// var obj = {
//   then: function (resolve, reject) {
//     resolve()
//   }
// }


// var p = new Promise((resolve, rejected) => {
//   rejected(1)
// })

// var p1 = p.then(null, (e) => {
//   console.log(e)
//   return new Promise((resolve) => resolve(33))
// })

// var p = new Promise(resolve => resolve(1))

// var p1 = p.then((v) => {
//   throw new Error('ha')
//   return Promise.resolve(3)
// }, (e) => {
//   console.log('haaaaa')
// })

var p = new Promise((r) => {
  throw new Error('xx')
  r(1)
})

p.then(v => {
  console.log(v)
})