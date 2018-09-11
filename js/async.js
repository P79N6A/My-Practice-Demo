function doSthAsync (delay) {
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      console.log(`延迟${delay}后，执行完毕`)
      resovle(delay)
    }, delay)
  })
}

async function test () {
  // let [a, b] = await Promise.all([doSthAsync(3000), doSthAsync(1000)])
  // console.log(a)
  // console.log(b)
  // let a = doSthAsync(3000)
  let b = doSthAsync(1000)

  // await a
  var c = await b
  console.log(c)
  // console.log(a)
  // console.log(b)
}

test().then(() => {
  console.log('ahaha')
})

var a = new Promise(resovle => {
  resovle('xixi')
})

 