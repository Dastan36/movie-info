import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: () => import(/* webpackChunkName: "about" */ './views/Main.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/user.vue')
    }
  ]
})
