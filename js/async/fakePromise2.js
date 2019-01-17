var PENDING = 'pending'
var RESOLVED = 'resolved'
var REJECTED = 'rejected'


function MyPromise (cb) {
  if (typeof cb !== 'function') throw TypeError('Promise resolver ' + cb + ' is not a function')

  this._status = PENDING
  this._value = undefined
  // 2.2.6 对于同一个 promise 可能会调用多次 then
  this._resolveCallbackQueue = []
  this._rejectCallbackQueue = []

  const resolve = (value) => {
    try {
      // 如果是 promise
      if (value instanceof MyPromise) {
        value.then(resolve, reject)
      } else if (value && typeof value.then === 'function') {
        // 如果是 thenable 对象（定义了 then 方法的对象或函数）
        value.then(resolve, reject)
      } else {
        this._status = RESOLVED
        this._value = value
        this._resolveCallbackQueue.forEach(cb => cb())
      }
    } catch (err) {}
  }
  const reject = (reason) => {
    this._status = REJECTED
    this._value = reason
    this._rejectCallbackQueue.forEach(cb => cb())
  }

  try {
    cb(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  // 需要返回新的 promise
  let promise2
  const value = this._value

  // 参数可选
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : e => e

  if (this._status === PENDING) {
    return promise2 = new Promise((resolve, reject) => {
      this._resolveCallbackQueue.push(() => {
        setTimeout(() => {
          try {
            var x = onFulfilled(value)
            PromiseResolutionProcedure(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0) 
      })

      this._resolveCallbackQueue.push(() => {
        setTimeout(() => {
          try {
            var x = onRejected(value)
            PromiseResolutionProcedure(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0) 
      })
    })
  }

  if (this._status === RESOLVED) {
    return promise2 = new MyPromise((resolve, reject) => {
      setTimeout(() => {
        try {
          var x = onFulfilled(value)
          PromiseResolutionProcedure(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      }, 0)
    })
  }

  if (this._status === REJECTED) {
    return promise2 = new MyPromise((resolve, reject) => {
      setTimeout(() => {
        try {
          var x = onRejected(value)
          PromiseResolutionProcedure(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      }, 0)
    })
  }
}

function PromiseResolutionProcedure (promise2, x, resolve, reject) {
  // 2.3.1 如果 promise 和 x 是相同的对象，就 reject
  if (promise2 === x) throw new TypeError('promise can\'t be same as x')
  // 状态一旦确定，就无法修改
  const isCalled = false

  if (x instanceof MyPromise) {
    if (x._status === PENDING) { 

    } else if (x._status === RESOLVED) {
      resolve(x._value)
    } else {
      reject(x._value)
    }
  } else if (Object.prototype.toString.call(x) === '[object Object]' || typeof x=== 'function') { // 2.3.3 判断 x 是否为对象或者函数
    try {
      // 2.3.3.2 如果不能取出 then 就 reject
      let then = x.then
      // 2.3.3.3 如果 then 是函数，就调用 then
      if (typeof then === 'function') {
        then.call(
          x, 
          y => { // 2.3.3.3.1 if/when resolvePromise is called with a value y, run [[Resolve]](promise, y).
            if (isCalled) return
            isCalled = true
            PromiseResolutionProcedure(promise2, y, resolve, reject)
          }, 
          r => { // 2.3.3.3.2 If/when rejectPromise is called with a reason r, reject promise with r.
            if (isCalled) return
            isCalled = true
            reject(r)
          }
        )
      } else {
        // 2.3.3.4 如果 then 不是函数，就 resolve(x)
        resolve(x)
      }
    } catch (e) {
      reject(e)
    }
  } else {
    // 如果 x 既不是对象也不是函数，就 resolve(x)
    resolve(x)
  }
}


// 测试数据

// resolve 参数
// 1. 参数是 promise
var p1 = new MyPromise(resolve => resolve(1))
var p2 = new MyPromise(resolve => resolve(p1))
console.log(p2)

var rejectedP = new MyPromise((resolve, reject) => reject(1))
var p = new Promise((resolve, reject) => {
  resolve(rejectedP)
})
console.log(p) // Promise {<pending>}
setTimeout(() => {
  console.log(p) // Promise {<rejected>: 1}
  console.log(p === resolvedPromise) // false
}, 0)
// 2. 参数是 thenable
var p = new MyPromise(resolve => resolve({
  then: function (resolve) {
    resolve('ahha')
  }
}))
// 3. 参数不是 promise 也不是 thenable
var p = new MyPromise(resolve => resolve(1))
console.log(p)
// 4. 没有参数
var p = new MyPromise(resolve => resolve())
console.log(p)


// reject 参数