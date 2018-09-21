// // function cb () {
// //   console.log('视图更新啦')
// // }

// function defineReactive (obj, key, val) {
//   const dep = new Dep()
//   return Object.defineProperty(obj, key, {
//     enumerable: true,
//     configurable: true,
//     get: function reactiveGetter () {
//       dep.addSub(Dep.target)
//       return val
//     },
//     set: function reactiveSetter (newVal) {
//       if (newVal === val) return
//       dep.notify()
//     }
//   })
// }

// function observer (value) {
//   if (!value || (typeof value !== 'object')) {
//     return
//   }

//   Object.keys(value).forEach((key) => {
//     defineReactive(value, key, value[key])
//   })
// }

// class Vue {
//   constructor (options) {
//     this._data = options.data
//     observer(this._data)
//     new Watcher()
//     // 模拟 render 过程，触发 test 属性的 get 函数
//     console.log('render', this._data.test)

//     new Watcher()
//     console.log('dierci', this._data.test)
//   }
// }

// // 发布者
// class Dep {
//   constructor () {
//     // 存放观察者（订阅者）的队列
//     this.subs = []
//   }
//   // 添加观察者
//   addSub (sub) {
//     this.subs.push(sub)
//   }
//   // 通知所有的观察者
//   notify () {
//     this.subs.forEach(sub => {
//       sub.update()
//     })
//   }
// }

// class Watcher {
//   constructor () {
//     Dep.target = this
//   }
//   update () {
//     console.log('视图更新啦')
//   }
// }

// var vue = new Vue({
//   data: {
//     test: 'xixi'
//   }
// })



// vue._data.test = 'ahah'

// class VNode {
//   constructor (tag, data, children, text, elm) {
//     // 标签名
//     this.tag = tag
//     // 节点的一些数据信息，比如说 props、attrs、指令、class 等数据
//     this.data = data
//     // 当前的节点的子节点，是一个数组
//     this.children = children
//     // 当前节点的文本
//     this.text = text
//     // 当前虚拟节点对应的真实 dom 节点
//     this.elm = elm
//   }
// }

// new VNode(
//   'span',
//   {
//     // 指令结合
//     directives: [
//       {
//         rawName: 'v-show',
//         expression: 'isShow',
//         name: 'show',
//         value: true
//       }
//     ],
//     // 静态 class
//     staticClass: 'demo'
//   },
//   [
//     new VNode(undefined, undefined, undefined, 'This is a span')
//   ]
// )

// // 转为 VNode 后
// var vnode = {
//   tag: 'span',
//   data: {
//     // 指令结合
//     directives: [
//       {
//         rawName: 'v-show',
//         expression: 'isShow',
//         name: 'show',
//         value: true
//       }
//     ],
//     // 静态 class
//     staticClass: 'demo'
//   },
//   text: undefined,
//   children: [
//     {
//       tag: undefined,
//       span: undefined,
//       text: 'This is a span',
//       children: undefined
//     }
//   ]
// }

// 封装生成常用 VNode 的方法
