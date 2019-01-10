function define (obj, key, val) {
  // 每个属性都需要一个 dep
  var dep = new Dep()

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get () {
      // 依赖收集
      dep.addSub(Dep.target)
      console.log(dep.subs)
      return val
    },
    set (newVal) {
      if (val === newVal) return;
      val = newVal
      dep.notify(val)
    }
  })
}

function observe (obj) {
  Object.keys(obj).forEach((key) => {
    define(obj, key, obj[key])
  })
}

// 订阅类（用存放属性的观察者的）
class Dep {
  constructor () {
    // 用来存放 watchers
    this.subs = []
  }
  addSub (sub) {
    this.subs.push(sub)
  }
  notify (newVal) {
    this.subs.forEach((sub) => {
      sub.update(newVal)
    })
  }
}

// 观察者类
class Watcher {
  constructor () {
    Dep.target = this
  }
  update (val) {
    console.log('更新视图啦', val)
  }
}

class Vue {
  constructor (options) {
    this._data = options.data
    observe(this._data)

    // 模拟有观察者
    new Watcher()

    // 模拟 render 的过程，为了触发 a 属性的 get 函数
    console.log('render', this._data.a)
  }
}

var o = new Vue({
  data: {
    a: 1,
    b: 2
  }
})

o._data.a = 123