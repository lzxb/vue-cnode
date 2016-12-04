import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './config/routes'
import store from './store/'
import * as filters from './filters/'
import { scrollRecord } from 'route-data'
import components from './components/' //加载公共组件

import 'normalize.css'
import 'flex.css'
import './iconfont/iconfont.css'
import 'github-markdown-css'
import './css/common.css'
import './less/common.less'

Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, components[key])
})
Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) //注册过滤器
Vue.use(VueRouter)
Vue.directive('scroll-record', scrollRecord)

const router = new VueRouter({
    routes,
    mode: 'history',
    base: '/vue-cnode/'
})
router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta
    var isLogin = Boolean(store.state.user.accesstoken) //true用户已登录， false用户未登录
    if (auth && !isLogin && path !== '/login') {
        return next({ path: '/login' })
    }
    next()
})

new Vue({ store, router }).$mount('#app')
