// var p2 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve()
//   }, 2000)
// })

// var p1 = new Promise(resolve => {
//   resolve(p2)
// })

// p1.then(data => {
//   console.log('p1')
// })

// p2.then(data => {
//   console.log('p2')
//   console.log('p1 status ', p1)
//   Promise.resolve().then(() => {
//     console.log('here')
//   })
// })


// err 和 catch 同时存在捏？
// var p = new Promise(resolve => {
//   throw Error('err')
// })

// var r = p.then(data => {
//   console.log('success ', data)
// })

// r.then(data => {
//   console.log(data)
// }, err => {
//   console.log('r', r)
//   console.log(err)
//   console.log(p)
// })


// resolve 的参数
// var p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('hah')
//   }, 2000)
// })
// var p1 = new Promise(resolve => {
//   resolve(p2)
// })

// p1.then(data => {
//   console.log('p1 ', data)
// })
// .catch(err => {
//   console.log(p1 === p2)
//   console.log('err', err)
// })

// var p = new Promise(resolve => {
//   resolve()
// })

// p.then(data => {
//   return {
//     then: (resolve) => {
//       console.log('haha')
//       resolve('xxx')
//     }
//   }
// })
// .then(data => {
//   console.log('data', data)
// })

// var test = function () {
//   return new Promise((resovle, reject) => {
//     resovle(x + 2)
//   })
// }

// test().then(() => {
//   console.log('haha')
// })

// setTimeout(() => {
//   console.log('xixi') // xixi
// }, 1000)

// var p = new Promise((resolve, reject) => {
//   resolve('xixi')
// })

// var a = p.then(data => {
//   console.log(data)
// })
// .finally(() => {
//   return Promise.resolve('xx')
// })
// .then(() => {
//   console.log('ya')
// })

var p1 = new Promise((resolve, reject) => {
  resolve('p1')
})

var p2 = new Promise(resolve => {
  resolve(p1)
})

p2.then(data => {
  console.log('p2', data)
})
.catch(data => {
  console.log(typeof data)
  console.log(data)
})