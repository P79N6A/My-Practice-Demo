// 三个状态
// new Promise(() => {})
// 接受一个函数作为参数

const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise (cb) {
  if (typeof cb !== 'function') {
    throw new Error('参数需要是函数')
  }

  var self = this
  self._state = PENDING
  self._value = null
  self._onResolvedCallback = []
  self._onRejectedCallback = []

  try {
    cb(resolve, reject)
  } catch (err) {
    throw err
  }

  function resolve (value) {
    // 之所以要 setTimeout 是为了后面可以注册事件
    // 而之所以 先 setTimeout 再判断，是怕两次改变 state
    // 怕 resolve 了，又 reject 呐
    setTimeout(() => {
      if (self._state === PENDING) {
        self._state = RESOLVED
        self._value = value
        for (var i = 0; i < self._onResolvedCallback.length; i++) {
          self._onResolvedCallback[i](value)
        }
      }
    }, 0)
  }

  // TODO:
  function reject (value) {
    setTimeout(() => {
      if (self._state === PENDING) {
        self._state = REJECTED
        self._value = value
        for (var i = 0; i < self._onRejectedCallback.length; i++) {
          self._onRejectedCallback[i](value)
        }
      }
    }, 0)
  }
}

MyPromise.resolve = (arg) => {
  
}
MyPromise.reject = () => {}

// 注册回调函数呐
// 这个方法是要返回一个新的 promise 的~
MyPromise.prototype.then = function (onResolved, onRejected) {
  var self = this
  // 之所以要声明一个变量来存放生成的 promise
  // 是为了避免如果有多个回调函数，返回了不同的 promise
  var promise2

  // 判断是否有传入事件处理函数 onResolved、onRejected
  // 如果木有，就给它赋默认函数（好像可以实现穿透？）
  // 穿透就是 then 方面木有任何回调函数~ p.then().then().then(v => console.log(v))
  // 这个 v 还是有值的喔，如果一开始有传的话~
  var onResolved = typeof onResolved === 'function' ? onResolved : v => v
  var onRejected = typeof onRejected === 'function' ? onRejected : v => {
    throw new Error(v)
  }
  
  // 如果状态是 resolved，就直接调用 onResolved
  if (self._state === RESOLVED) {
    return promise2 = new MyPromise((resolve, reject) => {
      var x = onResolved(self._value)
      resolutionPromise(promise2, x)
    })
  }
  
  // 如果还是 pending，说明要暂存这个回调函数啦
  if (self._state === PENDING) {
    // x.then
    // onResolved: function (v) {
    //   resolutionPromise(promise2, v, resolve, reject)
    // }
    return promise2 = new MyPromise((resolve, reject) => {
      self._onResolvedCallback.push(function () {
        // 按照标准
        try {
          var x = onResolved(self._value)
          resolutionPromise(promise2, x, resolve, reject)
        } catch (e) {
          // onResolved / onRejected 抛出异常后，promise2状态要置为拒绝
          reject(e)
        }
      })
      self._onRejectedCallback.push(function () {
        onRejected(self._value)
      })
    })
  }
}

// 在执行 then 的回调函数之前，要先判断之前 resolve/reject 的参数是什么类型的
// 如果是 promise，就直接用这个 promise 来调用 then

// 我知道啦！！！这个方法！！！就是为了能够 resolve 的，然后会对 resolve(x) 里面的 x 处理~~~ 
// 由 x 来决定 promise2 的状态
function resolutionPromise (promise2, x, resolve, reject) {
  // 检查 x 的值
  if (x === promise2) {
    reject('TypeError')
  }
  // 如果是 promise 的话
  if (x instanceof MyPromise) {
    if (x._state === PENDING) {
      // x.then(function (v) {
      //   resolutionPromise(promise2, v, resolve, reject)
      // }, reject)
      x.then(resolve, reject)
    } else {
      x.then(resolve, reject)
    }
    return
  }

  // 有 then 方法的对象 && 函数
  let isCalled = false
  if (x !== null && typeof x === 'object') {
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(
          x,
          (y) => {
            if (isCalled) return
            isCalled = true
            resolutionPromise(promise2, y, resolve, reject)
          },
          (r) => {
            if (isCalled) return
            isCalled = true
            reject(r)
          }
        )
      }
    } catch (e) {
      reject(e)
    }
  } else {
    // 普通的，就设置 promise 的状态为 resolved
    resolve(x)
  }
}

// var p = new MyPromise((resolve, reject) => {
//   reject(1)
// })

// p.then((v) => {
//   console.log(v)
// }, (e) => {
//   console.log(e)
// })
// .then(v => {
//   console.log(v)
// })

// console.log(p)

// var p = new MyPromise(resolve => {
//   resolve(new MyPromise(resolve => resolve(1)))
// })

// p.then(v => {
//   console.log(v)
//   var px = new MyPromise(resolve => resolve(3))
//   return px
// })
// .then(v => {
//   console.log(v)
// })


var p = new Promise(resolve => {
  resolve(new Promise(resolve => resolve(1)))
})

p.then(v => {
  console.log(v)
  var px = new Promise(resolve => resolve(3))
  return px
})
.then(v => {
  console.log(v)
})
