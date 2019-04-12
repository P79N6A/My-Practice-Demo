const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECT = 'rejected'

function MyPromise (cb) {
  // 需要传入回调函数，否则报错
  if (typeof cb !== 'function') {
    throw TypeError(`Promise resolver ${cb} is not a function`)
  }
  this._status = PENDING
  this._value = undefined
  this._resolvedCallbacks = [] // 存放要调用的 then 的 onFulfilled
  this._rejectedCallbacks = [] // 存放要调用的 then 的 onRejected

  const resolve = (value) => {
    if (value instanceof MyPromise) {
      // 如果是参数是 promise，要异步修改状态
      value.then(resolve, reject)
    } else if (value && typeof value === 'object') {
      // 如果参数是 thenable 对象或者是个 then 方法
      // 也要异步修改状态
      value.then(resolve, reject)
    } else {
      // 都不是，就同步修改状态
      this._status = RESOLVED
      // promise 的值就是参数值
      this._value = value
      // 调用之前存的 resolveCallbacks
      this._resolvedCallbacks.forEach(cb => {
        cb()
      })
    }
  }
  const reject = (value) => {
    // reject 的话，要同步修改状态的
    this._status = REJECT
    // promise 的值就是参数值，不管是不是 promise
    this._value = value
  }

  try {
    // 要捕获在调用回调函数时候的错误
    cb(resolve, reject)
  } catch (e) {
    // 状态置为 rejectd
    reject(e)
    // 还要把错误丢出去
    throw e
  }
}

// 2.2.7 必须返回一个 promise2 = promise1.then(onFulfilled, onRejected);
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  // 2.2.1 两个回调函数是可选的，如果木有传，就要忽略
  let promise2

  // 2.2.1.1 如果不是函数，就要透传（忽略它）
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected  === 'function' ? onRejected : e => { throw e }

  if (this._status === RESOLVED) {
    return promise2 = new Promise((resolve, reject) => {
      // 2.2.4 then 的回调都是异步哒，在当前执行上下文栈只有平台代码时才能调用
      // 这里只能用 macrotask 代替了，找不到和 promise.then 一样的 microtask
      setTimeout(() => {
        // 2.2.5 onFulfilled 和 onRejected 必须作为函数调用，没有 this 这个参数（箭头函数）
        var x = onFulfilled(this._value)
        // 2.2.7.1 如果返回了x，就要调用 Promise Resolution Procedure [[Resolve]](promise2, x)
        promiseResolutionProcedure(promise2, x, resolve, reject)
      }, 0)
    })
  }
  if (this._status === REJECT) {
    return promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        var x = reject(this._value)
        promiseResolutionProcedure(promise2, x, resolve, reject)
      }, 0)
    })
  }

  if (this._status === PENDING) {
    return promise2 = new Promise((resolve, reject) => {
      // 不知道这里要不要异步耶？
      this._resolvedCallbacks.push(() => {
        setTimeout(() => {
          // 2.2.5 onFulfilled 和 onRejected 必须作为函数调用，没有 this 这个参数（箭头函数）
          var x = onFulfilled(this._value)
          // 2.2.7.1 如果返回了x，就要调用 Promise Resolution Procedure [[Resolve]](promise2, x)
          promiseResolutionProcedure(promise2, x, resolve, reject)
        })
      })
      this._rejectedCallbacks.push(() => {
        setTimeout(() => {
          var x = reject(this._value)
          promiseResolutionProcedure(promise2, x, resolve, reject)
        }, 0)
      })
    })
  }
}

function promiseResolutionProcedure (promise2, x, resolve, reject) {
  // 2.3.1 如果 promise2 和 x 指向同一对象，就报错
  if (promise2 === x) {
    reject(new TypeError('promise and x refer to the same object'))
  }
  // 2.3.2 如果x是个 promise
  if (x instanceof MyPromise) {
    // 2.3.2.1 x 是 pending，就等它
    if (x._status === PENDING) {
      x.then(resolve, reject)
    } else if (x._status) {
      // then 的回调函数是异步执行的
      // 所以这里不把它合并到 x.then 中
      // 而是选择直接调用
      // 2.3.2.2 如果x是fulfilled，就用相同的值来完成这个 promise
      resolve(x._value)
    } else {
      reject(x._value)
    }
  } else if (typeof x === 'function' || (x && typeof x === 'object')) {
    // 2.3.3 如果x是函数或者是对象
    // 2.3.3.1 把 x.then 赋值给 then
    try {
      let then = x.then
      if (typeof then === 'function') {
        // 2.3.3.3 如果 then 是函数，就把 x 作为它的 this，第一个参数是 resolve，第二个参数是 reject
        // 2.3.3.3.3 resolve 和 reject 只有一个能被调用，且只能调用一次
        const isCalled = false
        try {
          then.call(
            x, 
            y => {
              if (isCalled) return
              isCalled = true
              // 2.3.3.3.1 如果 resolve 被调用，调用 [[Resolve]](promise, y)
              promiseResolutionProcedure(promise2, y, resolve, reject)
            }, 
            r => {
              if (isCalled) return
              isCalled = true
              // 如果 reject 被调用，调用 reject(r)
              reject(r)
            }
          )
        } catch (e) {
          // 2.3.3.3.4 如果调用 then，丢出异常 e
          // 2.3.3.3.4.1 如果 resolve 或者 reject 已经被调用，就忽略它
          if (isCalled) return
          // 2.3.3.3.4.2 否则，reject(e)
          reject(e)
        }
      } else {
        // 2.3.3.4 如果 then 不是个函数，就 resolve(x)
        resolve(x)
      }
    } catch (e) {
      // 2.3.3.2 如果提取 x.then 报错，就拒绝这个 promise，并设置理由为 e
      reject(e)
    }
  } else {
    // 2.3.3.4 如果不是对象或函数，就用x来完成这个promise
    resolve(x)
  }
}

MyPromise.defer = MyPromise.deferred = function () {
  let dfd = {}
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
}

var p2 = new MyPromise(resolve => {
  setTimeout(() => {
    resolve(3)
  }, 0)
})

var p1 = new MyPromise(resolve => {
  resolve(p2)
})

p1.then(data => {
  console.log('p1')
})

p2.then(data => {
  console.log('p2')
  console.log('p1 status ', p1) // 这里在浏览器输出的是 pending 状态
})

module.exports = MyPromise


var p = new Promise(resolve => {
  resolve(1)
})
console.log(p)