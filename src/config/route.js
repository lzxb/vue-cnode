import index from '../component/index'
import topicCreate from '../component/topicCreate'
import topic from '../component/topic'
import myMessages from '../component/myMessages'
import userView from '../component/userView'
import signin from '../component/signin'
import signout from '../component/signout'
import about from '../component/about'

export default {
    '/': {
        component: (resolve) => {
            require(['../app.vue'], resolve)
        },
        subRoutes: {
            '/': {
                auth: false,
                title: {
                    query: 'tab',
                    data: { all: '全部', good: '精华', share: '分享', ask: '问答', 'job': '招聘' }
                },
                component: index
            },
            '/topic/create': {
                auth: true,
                title: '创建主题',
                component: topicCreate
            },
            '/topic/:id': {
                auth: false,
                title: '详情',
                component: topic
            },
            'my/messages': {
                auth: true,
                title: '我的消息',
                component: myMessages
            },
            'user/:loginname': {
                auth: false,
                title: '用户信息',
                component: userView
            },
            '/signin': {
                auth: false,
                title: '登录',
                component: signin
            },
            '/signout': {
                auth: true,
                title: '退出',
                component: signout,
            },
            '/about': {
                auth: false,
                title: '关于',
                component: about

            }
        }
    }
}
