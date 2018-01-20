import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index/index'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: '/',
        name: 'index',
        component: Index
      },
      { path: '/', redirect: '/404' }
    ]
  })
}
