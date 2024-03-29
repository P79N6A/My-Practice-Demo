import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/login/:id',
        component: () => import('../components/login.vue')
      },
      {
        path: '/',
        component: () => import('../components/home.vue')
      }
    ]
  })
}