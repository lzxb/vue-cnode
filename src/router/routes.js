import App from '../app'
import Signin from '../pages/signin/'
import Signout from '../pages/signout/'
import About from '../pages/about/'
import UserUsername from '../pages/user/username/'
import SelfHome from '../pages/self/home/'
import SelfMessages from '../pages/self/messages/'
import TopicCreate from '../pages/topic/create/'
import TopicDetail from '../pages/topic/detail/'
import Index from '../pages/index/'
/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/signin', // 登录
        name: 'signin',
        meta: { auth: false },
        component: Signin
      },
      {
        path: '/signout', // 退出
        name: 'signout',
        component: Signout
      },
      {
        path: '/about', // 关于
        name: 'about',
        meta: { auth: false },
        component: About
      },
      {
        path: '/user/:username', // 查看用户信息
        name: 'user-detail',
        meta: { auth: false },
        component: UserUsername
      },
      {
        path: '/self/home/', // 我的个人中心
        name: 'self-home',
        meta: { auth: false },
        component: SelfHome
      },
      {
        path: '/self/messages/', // 我的消息
        name: 'self-messages',
        meta: { auth: false },
        component: SelfMessages
      },
      {
        path: '/topic/create', // 创建帖子
        name: 'topic-create',
        meta: { auth: false },
        component: TopicCreate
      },
      {
        path: '/topic/:id', // 查看帖子信息
        name: 'topic-detail',
        meta: { auth: false },
        component: TopicDetail
      },
      {
        path: '/', // 首页
        name: 'index',
        meta: { auth: false },
        component: Index
      },
      {
        path: '*', // 其他页面
        redirect: '/signin'
      }
    ]
  }
]
