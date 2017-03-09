import App from '../app'
import Login from '../pages/login/'
import Signout from '../pages/signout/'
import About from '../pages/about/'
import UserUsername from '../pages/user/username/'
import MyHome from '../pages/my/home/'
import MyMessages from '../pages/my/messages/'
import TopicCreate from '../pages/topic/create/'
import TopicVid from '../pages/topic/vid/'
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
        path: '/login', // 登录
        meta: { auth: false },
        component: Login
      },
      {
        path: '/signout', // 退出
        component: Signout
      },
      {
        path: '/about', // 关于
        meta: { auth: false },
        component: About
      },
      {
        path: '/user/:username', // 查看用户信息
        meta: { auth: false },
        component: UserUsername
      },
      {
        path: '/my/home/', // 我的个人中心
        meta: { auth: false },
        component: MyHome
      },
      {
        meta: { auth: false },
        path: '/my/messages/', // 我的消息
        component: MyMessages
      },
      {
        path: '/topic/create', // 创建帖子
        meta: { auth: false },
        component: TopicCreate
      },
      {
        meta: { auth: false },
        path: '/topic/:vid', // 查看帖子信息
        component: TopicVid
      },
      {
        path: '/', // 首页
        meta: { auth: false },
        component: Index
      },
      {
        path: '*', // 其他页面
        redirect: '/login'
      }
    ]
  }
]
