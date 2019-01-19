// 定义异步操作
function doSthAsync (delay) {
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      console.log(`延迟${delay}后，执行完毕`)
      resovle(delay)
    }, delay)
  })
}

// return 的是 promise
async function test () {
  var t1 = await doSthAsync(1000)
  console.log(t1)
}
test()


// 定义异步操作
// function doSthAsync (delay) {
//   aaaaa
//   return new Promise((resovle, reject) => {
//     setTimeout(() => {
//       console.log(`延迟${delay}后，执行完毕`)
//       resovle(delay)
//     }, delay)
//   })
// }

// async 内部报错
// async function test () {
//   var t1 = await doSthAsync(1000)
// }

// test().catch(err => console.log('err', err))
async function t () {
  console.log(1)
  var ccc = await new Promise(resovle => {
    resovle('xixi')
  })
  console.log(ccc) // ccc
}
t()
console.log(2)


// 看题
var a = 0
var b = async () => {
  a = a + await new Promise(resolve => {
    console.log('haha')
    resolve(1)
  })
  console.log('2', a) // -> '2' 10
  a = (await 10) + a
  console.log('3', a) // -> '3' 20
}
b()
a++
console.log('1', a) // -> '1' 1


// ..
async function test () {
  await 1
  console.log(2)
  await 2
  await 3
}
test()
console.log(1)