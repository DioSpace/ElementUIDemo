import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/page/Login'
import Home from '@/components/page/Home'
import SliderVerify from '@/components/page/SliderVerify'
import Network from '@/components/page/Network'
import PaginationDemmo from '@/components/page/PaginationDemo'
import PaginationDemmo2 from '@/components/page/PaginationDemo2'

Vue.use(Router)

export default new Router({
    routes: [
        {
            //路由重定向
            path: '/', redirect: '/pagination2'
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
        },
        {
            name: 'pagination',
            path: '/pagination',
            component: PaginationDemmo
        },
        {
            name: 'pagination2',
            path: '/pagination2',
            component: PaginationDemmo2
        },
    ]
})
