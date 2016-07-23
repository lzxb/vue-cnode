import Vue from 'vue'
import VueRouter from 'vue-router'

import route from './config/route' //路由配置

import 'normalize.css' //重置浏览器默认样式
import 'flex.css' //flex布局
import './webfont/webfont.css' //web字体
import './css/common.less' //公共样式


Vue.use(VueRouter)

var router = new VueRouter({
    history: true
})

router.map(route)

var App = Vue.extend({})

router.start(App, '#app')