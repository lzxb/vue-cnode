export default [
    [
        {
            title: '全部',
            icon: 'caidan',
            link: '/?tab=all',
            auth: false
        }, {
            title: '精华',
            icon: 'good',
            link: '/?tab=good',
            auth: false
        }, {
            title: '分享',
            icon: 'fenxiang',
            link: '/?tab=share',
            auth: false
        }, {
            title: '问答',
            icon: 'wenda',
            link: '/?tab=ask',
            auth: false
        }, {
            title: '招聘',
            icon: 'zhaopin',
            link: '/?tab=job',
            auth: false
        }
    ],
    [
        {
            title: '消息',
            icon: 'xiaoxi',
            link: '/my/messages',
            auth: true
        },
        {
            title: '关于',
            icon: 'guanyu',
            link: '/about',
            auth: false
        },
        {
            title: '退出',
            icon: 'tuichu',
            link: '/signout',
            auth: true
        }
    ]
]