// function async1 () {
//   return new Promise(resolve => {
//     console.log('a1 start')
//     // 这里模拟 await 后面的表达式的执行
//     // Promise.resolve(undefined) 相当于 async 调用后的结果
//     // 这里其实等同于 await Promise.resolve(undefined)
//     resolve(Promise.resolve(undefined))
//   }).then(data => {
//     console.log('a1 end')
//   })
// }

async function async1 () {
  console.log('a1 start')
  await 1
  console.log('a1 end')
}

async1()
console.log(2)
new Promise((resolve) => {
  resolve(1)
}).then(data => {
  console.log('p end')
})