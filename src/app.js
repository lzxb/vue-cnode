import 'normalize.css'
import 'flex.css'
import './style/iconfont/iconfont.css'
import './style/common.less'
import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import { createVuet } from './vuet/index'
import { sync } from 'vuex-router-sync'
import WatchComponent from '@/util/watch-component'

Vue.use(WatchComponent)

export function createApp () {
  const store = createStore()
  const router = createRouter()
  const vuet = createVuet()

  sync(store, router)

  const app = new Vue({
    vuet,
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store, vuet: vuet }
}
