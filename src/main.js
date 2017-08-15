import 'normalize.css'
import 'flex.css'
import './iconfont/iconfont.css'
import 'github-markdown-css'
import './css/common.css'
import './less/common.less'

import Vue from 'vue'

import vuet from './vuet/' // 注意：Vuet要在所有组件初始化前执行，避免第三方插件无法使用
import router from './router/'
import * as filters from './filters/'
import components from './components/'

Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
  Vue.component(`v${name}`, components[key])
})
Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) // 注册过滤器

export default new Vue({ router, vuet }).$mount('#app')
