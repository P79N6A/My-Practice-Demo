import Vue from 'vue'
import Router from 'vue-router'
import User from './components/User.vue'
import Test from './components/Test.vue'
import Father from './components/Father.vue'
import Son from './components/Son.vue'

debugger
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user/:id',
      name: 'user',
      component: User
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      alias: '/testb'
    },
    {
      path: '/father/:id',
      name: 'father',
      component: Father,
      children: [
        {
          path: 'son',
          name: 'son',
          component: Son
        }
      ]
    }
  ]
})
