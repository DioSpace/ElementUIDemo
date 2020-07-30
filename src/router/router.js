import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/page/Login'
import Home from '@/components/page/Home'
import SliderVerify from '@/components/page/SliderVerify'
import Network from '@/components/page/Network'

Vue.use(Router)

export default new Router({
  routes: [
    {
      //路由重定向
      path: '/', redirect: '/network'
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
    },
    {
      name: 'sliderverify',
      path: '/sliderverify',
      component: SliderVerify
    },
    {
      name: 'network',
      path: '/network',
      component: Network
    }
  ]
})
