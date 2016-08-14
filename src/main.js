import Vue from 'vue'
import VueRouter from 'vue-router'
var VueAsyncData = require('vue-async-data')

import route from './config/route' //路由配置
import * as filter from './filter' //自定义过滤器
import app from './app.vue'

import 'normalize.css' //重置浏览器默认样式
import 'flex.css' //flex布局
import './webfont/webfont.css' //web字体
import './less/common.less' //公共样式
import './iconfont/iconfont.css' //web字体图标

Vue.use(VueRouter)
Object.keys(filter).forEach(k => Vue.filter(k, filter[k])) //注册过滤器

var router = new VueRouter({ //配置路由
    history: process.env.NODE_ENV !== 'production'
})

router.map(route)
router.start(Vue.extend({}), '#main')