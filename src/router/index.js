import Vue from 'vue'
import Router from 'vue-router'

import TopicList from '@/views/topic/list/index'
import TopicDetail from '@/views/topic/detail/index'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: '/',
        name: 'topic-list',
        component: TopicList
      },
      {
        path: '/topic/:id',
        name: 'topic-detail',
        component: TopicDetail
      },
      { path: '/', redirect: '/404' }
    ]
  })
}
