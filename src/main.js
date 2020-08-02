import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/router'

import { post, fetch, patch, put } from './components/utils/request'
//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small' })

const Bus = new Vue();//全局通信

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    data: { Bus },
    components: { App },
    template: '<App/>'
})
