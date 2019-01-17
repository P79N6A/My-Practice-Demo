// 缺点
// 1. 无法得知内部错误，如果木有回调的话
var p = new Promise((resolve, reject) => {
  asdasd
})

// 生成 Promsie 实例
// 1. new Promise()
var p = new Promise((resolve, reject) => {
  if (true) {
    resolve(1)
  } else {
    reject('err')
  }
})

// resolve 的参数
// 1. 参数是 promsise
var resolvedPromise = Promise.resolve(1)
var p = new Promise((resolve, reject) => {
  resolve(resolvedPromise)
})
console.log(p) // Promise {<pending>}
setTimeout(() => {
   console.log(p) // Promise {<resolved>: 1}
   console.log(p === resolvedPromise) // false
}, 0)

var rejectedP = Promise.reject(1)
var p = new Promise((resolve, reject) => {
  resolve(rejectedP)
})
console.log(p) // Promise {<pending>}
setTimeout(() => {
  console.log(p) // Promise {<rejected>: 1}
  console.log(p === resolvedPromise) // false
}, 0)
// 2. 参数是 thenable 对象
var p = new Promise((resolve, reject) => {
  resolve({
    a: 1,
    then: function (resolve, reject) {
      resolve(this.a)
    }
  })
})
console.log(p) // Promise {<pending>}
setTimeout(() => console.log(p), 0) // Promise {<resolved>: 1}
// 3. 参数不是 promise，也不是 thenable
var p = new Promise((resolve, reject) => {
  resolve(1)
})
console.log(p) // Promise {<resolved>: 1}

// reject 的参数
var p1 = new Promise((resolve, reject) => {})
var p = new Promise((resolve, reject) => {
  reject(p1)
})
console.log(p) // Promise {<rejected>: Promise}


// then
// 1. 第一个参数
var p = new Promise((resolve, reject) => {
  resolve(Promise.resolve('haha'))
})
p.then(data => {
  console.log(data) // haha
})

var p = new Promise((resolve, reject) => {
  resolve(1)
})
p.then(data => {
  console.log(data)
})


// 2. 第二个参数
var p = new Promise((resolve, reject) => {
  reject(1)
})
p.then(() => {}, (err) => {
  console.log(err)
})

var p = new Promise((resolve, reject) => {
  reject(Promise.resolve('haha'))
})
p.then(() => {}, (err) => {
  console.log(err instanceof Promise)
})

// 返回
// 1. return 是个 promise
var p = new Promise((resolve, reject) => {
  resolve(1)
})
var p2 = p.then(data => {
  return Promise.resolve('haha')
})
setTimeout(() => console.log(p2), 0) // Promise {<resolved>: "haha"}
// 2. return 是个有 then 方法的对象
var p = new Promise((resolve, reject) => {
  resolve(1)
})
var p2 = p.then(data => {
  return {
    then: function (resolve, reject) {
      resolve(1)
    }
  }
})
setTimeout(() => console.log(p2), 0) // Promise {<resolved>: 1}
// 3. return 的既不是 promise，也不是 thenable 对象
var p = new Promise((resolve, reject) => {
  resolve(1)
})
var p2 = p.then(data => {
  return {a: 1}
})
setTimeout(() => console.log(p2), 0)
// 4. 没有显式 return（相当于 return new Promise((resolve), resolve(undefined))
var p = new Promise((resolve, reject) => {
  resolve(1)
})
var p2 = p.then(data => {})
setTimeout(() => console.log(p2), 0) // Promise {<resolved>: undefined}

// 链式
var p = new Promise((resolve, reject) => {
  resolve(1)
})
p.then(data => {
  return data
})
.then(data => {
  console.log(data)
})


// catch
var p = new Promise((resolve, reject) => {
  reject(Promise.resolve(1))
})
p.catch(err => {
  console.log(err)
})


// finally
var p = new Promise((resolve, reject) => {
  reject(1)
})

var p2 = p.finally(() => {console.log('hha')})
setTimeout(() => console.log(p2), 0)


// Promise.all([...])
// 参数都是 resolved 的
var p1 = Promise.resolve({})
var p2 = Promise.resolve(2)
var p3 = Promise.resolve(3)
var p = Promise.all([p1, p2, p3])
setTimeout(() => { console.log(p) }, 0)
// 参数有 rejected 的
var p2 = Promise.resolve(2)
var p3 = Promise.resolve(3)
var p1 = Promise.reject(Promise.resolve(1))
var p = Promise.all([p1, p2, p3])
setTimeout(() => { console.log(p) }, 0)


// Promise.race([...])
var p1 = Promise.reject(1)
var p2 = Promise.resolve(2)
var p3 = Promise.resolve(3)
var p = Promise.race([p1, p2, p3])
setTimeout(() => { console.log(p) }, 0)


// Promise.resolve()
var p = Promise.resolve(1)
console.log(p)

// 参数
// 1. promise
var p1 = Promise.resolve(1)
var p2 = Promise.resolve(p1)
console.log(p1 === p2) // true

var p1 = Promise.resolve(1)
var p2 = new Promise((resolve, reject) => {
  resolve(p1)
})
console.log(p1 === p2)
// 2. thenable 对象，会立刻转为 promise，再调用 resolve
var p = Promise.resolve({
  a: 1,
  then: function (resolve, reject) {
    resolve(1)
  }
})
console.log(p)
setTimeout(() => console.log(p), 0)
// 3. 不是 promise，不是 thenable 对象
var p = Promise.resolve({})
console.log(p) // Promise {<resolved>: {…}}
// 4. 没有参数
var p = Promise.resolve()
console.log(p) // Promise {<resolved>: undefined}


// 错误处理
var p = new Promise((resolve, reject) => {
  throw Error('haha')
})

var p = Promise.resolve(1)
p.then(data => {
  throw Error('haha')
})
.then()
.then()
.then()
.catch(err => {
  console.log(err)
})
