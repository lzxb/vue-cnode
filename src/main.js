import Vue from 'vue'
import VueRouter from 'vue-router'
import route from './config/route' //路由配置
import * as filter from './filter' //自定义过滤器
import app from './app'

import 'normalize.css' //重置浏览器默认样式
import 'flex.css' //flex布局
import 'github-markdown-css' //markdown样式
import './less/common.less' //公共样式
import './iconfont/iconfont.css' //web字体图标

Vue.use(VueRouter)
Object.keys(filter).forEach(k => Vue.filter(k, filter[k])) //注册过滤器

var router = new VueRouter({ //配置路由
    history: process.env.NODE_ENV !== 'production'
})

router.map(route)
router.beforeEach(({to, next}) => {
    if (to.auth && !app.store.state.user.id) { //验证用户是否登录，用户没有登录则强制跳转到登录页面
        router.replace('/signin')
    } else {
        next()
    }
})
router.start(Vue.extend({}), '#main')

applicationCache.onupdateready = () => {
    setTimeout(() => {
        if (confirm('更新已经完成，是否要切换到最新版本')) {
            location.reload()
        }
    }, 1000)
}