import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/page/Login'
import Home from '@/components/page/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      //路由重定向
      path: '/', redirect: '/login'
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home
    }
  ]
})
