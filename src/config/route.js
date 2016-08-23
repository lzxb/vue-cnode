export default {
    '/': {
        component: (resolve) => {
            require(['../app.vue'], resolve)
        },
        subRoutes: {
            '/': {
                title: {
                    query: 'tab',
                    data: { all: '全部', good: '精华', share: '分享', ask: '问答', 'job': '招聘' }
                },
                component: (resolve) => {
                    require(['../component/index.vue'], resolve)
                }
            },
            '/topic/create': {
                title: '创建主题',
                component: (resolve) => {
                    require(['../component/topicCreate.vue'], resolve)
                }
            },
            '/topic/:id': {
                title: '主题详情',
                component: (resolve) => {
                    require(['../component/topic.vue'], resolve)
                }
            },
            'my/messages': {
                title: '我的消息',
                component: (resolve) => {
                    require(['../component/myMessages.vue'], resolve)
                }
            },
            'user/:loginname': {
                title: '用户信息',
                component: (resolve) => {
                    require(['../component/userView.vue'], resolve)
                }
            },
            '/signin': {
                title: '登录',
                component: (resolve) => {
                    require(['../component/signin.vue'], resolve)
                }
            },
            '/signout': {
                title: '退出',
                component: (resolve) => {
                    require(['../component/signout.vue'], resolve)
                }
            },
            '/about': {
                title: '关于',
                component: (resolve) => {
                    require(['../component/about.vue'], resolve)
                }
            }
        }
    }
}
