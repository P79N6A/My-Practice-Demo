// console.log('a')

// setTimeout(() => {
//   console.log('b')
//   Promise.resolve().then(() => {
//     console.log('f')
//   })
//   .then(() => {
//     console.log('g')
//   })
// }, 500)

// setTimeout(() => {
//   console.log('c')
//   Promise.resolve().then(() => {
//     console.log('h')
//   })
//   .then(() => {
//     console.log('i')
//   })
// }, 1000)

// // setTimeout(() => {
// //   console.log('b')
// // }, 0)

// // Promise.resolve().then(() => {
// //   console.log('d')
// // })
// // .then(() => {
// //   console.log('e')
// // })

// // Promise.resolve().then(() => {
// //   console.log('x')
// // })
// // .then(() => {
// //   console.log('y')
// // })

// console.log('f')


Promise.resolve().then(function promise1 () {
  console.log('promise1');
})
.then(()=>{
  console.log('promise3');
})

setTimeout(function setTimeout1 (){
  console.log('setTimeout1')
  Promise.resolve().then(function  promise2 () {
    console.log('promise2');
  })
  .then(()=>{
    console.log('promise4');
  })
}, 0)

setTimeout(function setTimeout2 (){
console.log('setTimeout2')
}, 0)