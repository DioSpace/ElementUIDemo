import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/navigation/Main'
import Login from '@/components/pages/Login'
import Layout01 from '@/components/pages/mylayout/Layout01'
import Network from '@/components/pages/network/Network'
import PaginationDemmo from '@/components/pages/pagination/PaginationDemo'
import PaginationDemmo2 from '@/components/pages/pagination/PaginationDemo2'
import SliderVerify from '@/components/pages/codeverify/SliderVerify'
import Statistics from '@/components/pages/charts/Statistics'

Vue.use(Router)

export default new Router({
    routes: [
        {
            //路由重定向
            path: '/', redirect: '/main'
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'main',
            path: '/main',
            component: Main,
            iconCls: 'el-icon-tickets',
            children: [
                {
                    name: 'network',
                    path: '/network/network01',
                    component: Network,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    name: 'pagination',
                    path: '/pagination/pagination1',
                    component: PaginationDemmo,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    name: 'pagination2',
                    path: '/pagination/pagination2',
                    component: PaginationDemmo2,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    name: 'sliderverify',
                    path: '/sliderverify',
                    component: SliderVerify,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    name: '数据可视化',
                    path: '/charts/statistics',
                    component: Statistics,
                    meta: {
                        requireAuth: true
                    }
                }
            ]
        },
        {
            name: 'layout01',
            path: '/layout01',
            component: Layout01,
        }
    ]
})
