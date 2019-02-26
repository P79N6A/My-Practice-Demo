import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

var eventBus = {
  install (v) {
    Vue.prototype.$bus = v
    console.log(v)
  }
}
Vue.use(eventBus)

  Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
