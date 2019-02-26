/* @flow */

import type Watcher from './watcher'
import { remove } from '../util/index'
import config from '../config'

// 这个是用来记录 dep 的 id 的，每个 dep 实例都不同
let uid = 0

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
export default class Dep {
  static target: ?Watcher;
  id: number;
  subs: Array<Watcher>;

  constructor () {
    // 用来唯一标识一个 dep 实例
    this.id = uid++
    // 用来收集观察者
    this.subs = []
  }

  // 添加观察者到 subs 中
  addSub (sub: Watcher) {
    this.subs.push(sub)
  }

  removeSub (sub: Watcher) {
    remove(this.subs, sub)
  }

  // 让当前 watcher 把这个 dep 添加到自己的 deps 中
  // 用来让 watcher 知道自己在观察哪些属性（用了哪些 dep）
  depend () {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  // 通知观察者
  // setter 的时候会用到
  notify () {
    // stabilize the subscriber list first
    const subs = this.subs.slice()
    if (process.env.NODE_ENV !== 'production' && !config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      // 按照 watcher 的 id，从小到大进行排序
      // 为什么要这样，后面会解析
      subs.sort((a, b) => a.id - b.id)
    }
    // 对所有订阅这个属性变化的 watcher 进行通知
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null
const targetStack = []

export function pushTarget (target: ?Watcher) {
  targetStack.push(target)
  Dep.target = target
}

export function popTarget () {
  targetStack.pop()
  Dep.target = targetStack[targetStack.length - 1]
}
