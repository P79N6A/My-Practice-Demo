// // 发布者
// // 一个属性对应一个发布者
// // 可以有多个订阅者，只要检测到 dom 上有需要对应属性的
// class Dep {
//   constructor () {
//     this.sub = []
//   }

//   // 把订阅者添加到通知队列
//   addSub (sub) {
//     this.sub.push(sub)
//   }

//   // 通知订阅者
//   notify () {
//     this.sub.forEach(sub => {
//       sub.update()
//     })
//   }
// }

// // 用来指向当前订阅者的
// Dep.target = null

// // 订阅者
// class Watcher {
//   constructor (obj, key, cb) {
//     // 指向自身，便于让发布者添加
//     Dep.target = this
//     this.cb = cb
//     this.obj = obj
//     this.key = key
//     // 触发监听的 getter，把该订阅者添加到发布者的通知队列
//     this.value = obj[key]
//     // 取消指向
//     Dep.target = null
//   }

//   update () {
//     this.value = this.obj[this.key]
//     // 通知视图改变
//     this.cb(this.value)
//   }
// }

// // 用来改变视图的函数
// function update (val) {
//   console.log('dom change: ', val)
// }

// // 观察函数，看那个对象需要监听的
// function observer (obj) {
//   if (!obj || typeof obj !== 'object') {
//     return
//   }

//   // 对每个属性都劫持
//   Object.keys(obj).forEach(key => {
//     defineProperty(obj, key, obj[key])
//   })
// }

// // 具体的，劫持某个属性的函数
// // 有个问题，为啥一定要传 val？是为了 get 和 set 有个变量可以对应？
// function defineProperty (obj, key, val) {
//   // 递归子属性
//   observer(val)

//   // 创建该属性对应的发布者
//   let dep = new Dep()
//   Object.defineProperty(obj, key, {
//     enumerable: true,
//     configurable: true,
//     get: function () {
//       console.log('get value')
//       if (Dep.target) {
//         dep.addSub(Dep.target)
//       }
//       return val
//     },
//     set: function (newVal) {
//       console.log('change value')
//       // 数据改变了，要通知发布者发布消息
//       // 所以是不管是否和原来的数据一致的咯？
//       dep.notify()
//       val = newVal
//     }
//   })
// }

// let data = {
//   name: 'Lin'
// }
// observer(data)

// // <div> {name} </div>
// // 模拟 {name}，模拟创建个介个，需要监听这个属性的改变
// new Watcher(data, 'name', update)

// // 改变啦
// data.name = 'xlc'

