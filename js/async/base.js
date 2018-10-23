setTimeout(() => {
  console.log(0)
})

new Promise(resolve => {
  resolve(1)
  Promise.resolve().then(t => {
    console.log(2)
    // Promise.resolve().then(t => {
    //   console.log(4)
    // })
    new Promise(resolve => {
      resolve(6)
    })
    .then(t => {
      console.log(t)
    })
  })
  console.log(3)
})
.then(t => {
  console.log(t)
})

console.log(5)

// let cache = null;
// function getValue() {
//       if(true) {
//            return Promise.resolve(1);  // 存在cache，这里为同步调用
//       }
//      return fetch('/api/xxx').then(r => cache = r); // 这里为异步调用
// }
// console.log('before getValue');
// getValue().then(() => console.log('getValue'));
// console.log('after getValue');


// setTimeout(() => {
//   console.log(0)
// })

// new Promise(resolve => {
//   resolve(1)
//   Promise.resolve(new Promise(resolve => resolve())).then(t => {
//     console.log(2)
//   })
//   console.log(3)
// })
// .then(t => {
//   console.log(t)
// })

// console.log(4)