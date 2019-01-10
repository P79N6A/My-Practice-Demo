// 这里把 fulfilled 用 resolved 代替啦
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise (cb) {
  // 这些属性是私有的，外部都不能访问的
  this._state = PENDING
  this._value = null
  this._onResolvedCallbackQueue = [] // 存储当前 promise.then 上注册的 onResolved 方法
  this._onRejectedCallbackQueue = [] // ... onRejected 方法

  const resolve = (value) => {
    // 如果 value 是个 promise 的话
    // 这是为了初次 new 的时候，resolve(value) 的 value 可能是 promise
    // 递归调用，直到它不是 promise
    if (value instanceof MyPromise) {
      value.then(resolve, reject)
      return
    }

    // 不能立刻修改状态的，要延迟修改，修改完后才会调用注册的 onResolved
    setTimeout(() => {
      // 状态只能修改一次，
      // 状态一旦改变就不能再改了
      // 所以只有当 pending 的时候才能修改（说明状态还没改过呐）
      if (this._state === PENDING) {
        this._state = RESOLVED
        this._value = value
        // 执行所有在当前 promise 监听函数 onResolved
        for (let i = 0; i < this._onResolvedCallbackQueue.length; i++) {
          this._onResolvedCallbackQueue[i](this._value)
        }
      }
    }, 0)
  }
  const reject = (value) => {
    setTimeout(() => {
      if (this._state === PENDING) {
        this._state = REJECTED
        this._value = value
        for (let i = 0; i < this._onResolvedCallbackQueue.length; i++) {
          this._onRejectedCallbackQueue[i](this._value)
        }
      }
    }, 0)
  }

  // 调用 cb 时，可能会出错的，所以要用 try ... catch
  try {
    cb(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

// then 返回一个新的 promise
// 根据当前 promise 的状态来决定执行
// pending 就添加订阅函数到对应的队列
// resolved / rejected 就执行执行 onResolved/onRejected 函数
// then 的回调函数全部都要延迟执行哒
MyPromise.prototype.then = function (onResolved, onRejected) {
  let promise2

  // 考虑到 onResolved onRejected 没有赋值的情况
  // 考虑到 then 的穿透问题
  onResolved = typeof onResolved === 'function' ? onResolved : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : (e) => {
    // 如果木有 onRejected 函数，说明没对错误进行处理
    // 要抛出错误。
    throw new Error('Uncaptured Error: ' + e)
  }

  // promise.then 的回调函数，一定是延迟执行的
  // 所以要加个 setTimeout
  if (this._state === RESOLVED) {
    return (promise2 = new MyPromise((resolve, reject) => {
      setTimeout(() => {
        try {
          let x = onResolved(this._value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      }, 0)
    }))
  }
  if (this._state === REJECTED) {
    return (promise2 = new MyPromise((resolve, reject) => {
      setTimeout(() => {
        try {
          let x = onRejected(this._value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      }, 0)
    }))
  }

  // 添加订阅
  if (this._state === PENDING) {
    return (promise2 = new MyPromise((resolve, reject) => {
      // onResolved
      this._onResolvedCallbackQueue.push((value) => {
        try {
          let x = onResolved(value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })

      // onRejected
      this._onRejectedCallbackQueue.push((value) => {
        try {
          // 调用处理错误函数
          // 错误已经被这个函数捕获了
          let x = onRejected(value)
          // 设置 promise2 的状态为 rejected
          // x 是错误处理函数的结果
          // promise2 的状态由 x 的状态决定
          resolvePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e)
        }
      })
    }))
  }
}

// 用来 resolve 的。
// 适用于 resolve(x) 的各种情况
// 会根据 x 的状态来决定 promise2 的状态哒
function resolvePromise (promise2, x, resolve, reject) {
  if (promise2 === x) {
    throw new TypeError('chain invoke')
  }

  // x 是 promise
  if (x instanceof MyPromise) {
    // x 的状态决定 promise2 的状态
    if (x._state === PENDING) {
      // 如果是 pending，那就要等 x 的状态改变后才执行
      // 设置 x 对应的订阅函数啦，用 then 就可以设置了
      x.then((y) => {
        resolvePromise(promise2, y, resolve, reject)
      }, reject)
    } else {
      x.then(resolve, reject)
    }
    
    // 退出当前函数
    return
  }

  // x 是对象或者函数
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      // 如果取 x.then 时出错，就要以 e 为原因拒绝 promise2
      // 所以这里要用 try
      let then = x.then
      if (typeof then === 'function') {
        // 因为 then 的回调函数只能被调用一次
        // 所以需要有个标记
        let isCalled = false
        then.call(
          x,
          (y) => {
            if (isCalled) return
            isCalled = true
            resolvePromise(promise2, y, resolve, reject)
          },
          (r) => {
            if (isCalled) return
            isCalled = true
            reject(r)
          }
        )
      } else {
        resolve(x)
      }
    } catch (e) {
      reject(e)
    }

    // 退出函数
    return 
  }

  // x 是其他类型的
  resolve(x)
}

MyPromise.prototype.catch = function (cb) {
  return this.then(null, cb)
}


// var p = new MyPromise((resolve, reject) => {
//   // reject(1)
//   var a = new MyPromise(resolve => resolve(4))
//   resolve(a)
// })

// var p1 = p.then((v) => {
//   throw new Error('我们...')
//   return new MyPromise(resolve => resolve(3))
// })

// p1.then((v) => {
//   console.log(v)
// }, (e) => {
//   console.log('a')
// })

// p1.catch((e) => {
//   console.log(e)
// })


// var p = new MyPromise((r) => {
//   // throw new Error('xx')
//   r(new MyPromise(resolve => resolve(3)))
// })

// p.then(v => {
//   console.log(v)
// })
// .catch((e) => {
//   console.log('hah')
//   console.log(e)
// })

var p2 = new MyPromise(resolve => {
  setTimeout(() => {
    resolve()
  }, 2000)
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
  // Promise.resolve().then(() => {
  //   console.log('here') // 然后这里会优先于 p1.then() 输出
  // })
})

console.log(p2)