// 这是用来存放订阅了的 watcher 的类
class Dep {
  constructor () {
    this.subs = []
  }
  // 添加 watcher 到自己的队列中
  addSub (sub) {
    this.subs.push(sub)
  }
  // 通知各个 watcher
  notify () {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}
// 用来指向当前的 watcher 的
Dep.target = null

// 订阅者
class Watcher {
  constructor () {
    Dep.target = this
  }
  update () {
    console.log('视图更新啦')
  }
}

function defineReactive (obj, key, val) {
  // 一个属性需要一个 dep，用来存储订阅这个属性的 watcher
  let dep = new Dep()

  // 对属性响应式
  Object.defineProperty(obj, 'a', {
    enumerable: true,
    configurable: true,
    get () {
      // 依赖收集
      dep.addSub(Dep.target)
      return val
    },
    set (newVal) {
      if (newVal === val) return
      val = newVal
      // 通知订阅了这个属性的 watcher
      dep.notify()
    }
  })
}

function observe (obj) {
  let keys = Object.keys(obj)
  keys.forEach((key) => {
    defineReactive(obj, key, obj[key])
  })
}

var obj = {
  a: 1
}
observe(obj)

// 触发依赖收集
new Watcher()
console.log('render~', obj.a)

// 当数据修改时，会响应
obj.a = 10