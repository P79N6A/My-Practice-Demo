import View from './components/view'
import Link from './components/link'

export let _Vue

export function install (Vue) {
  // 避免重复调用 install
  if (install.installed && _Vue === Vue) return
  // 设置标志：插件已安装
  install.installed = true
  // 存储 Vue
  _Vue = Vue

  const isDef = v => v !== undefined

  const registerInstance = (vm, callVal) => {
    let i = vm.$options._parentVnode
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal)
    }
  }

  // 给所有的 Vue 实例都混入了 beforeCreate 和 destroyed
  Vue.mixin({
    beforeCreate () {
      // 判断是否有 router 对象，这个对象只有在根组件上才能有
      if (isDef(this.$options.router)) {
        // 设置根路由为自己
        this._routerRoot = this
        // 获取 new Router(options) 调用后返回的实例对象
        this._router = this.$options.router
        // TODO: 初始化
        this._router.init(this)
        // 设置响应式，实现双向绑定
        Vue.util.defineReactive(this, '_route', this._router.history.current)
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
      }
      registerInstance(this, this)
    },
    destroyed () {
      registerInstance(this)
    }
  })

  // 往 Vue 原型上添加了两个属性：$router 和 $route
  Object.defineProperty(Vue.prototype, '$router', {
    get () { return this._routerRoot._router }
  })

  Object.defineProperty(Vue.prototype, '$route', {
    get () { return this._routerRoot._route }
  })

  // 注册全局组件
  Vue.component('RouterView', View)
  Vue.component('RouterLink', Link)

  const strats = Vue.config.optionMergeStrategies
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created
}