import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
var router = new VueRouter({
    history: true
})

router.map({
    '/': {
        component: (resolve) => {
            require(['./component/indexList.vue'], resolve)
        }
    },
    '/topic/create': {
        component: (resolve) => {
            require(['./component/topicCreate.vue'], resolve)
        }
    },
    '/topic/:id': {
        component: (resolve) => {
            require(['./component/topic.vue'], resolve)
        }
    },
    'my/messages': {
        component: (resolve) => {
            require(['./component/myMessages.vue'], resolve)
        }
    },
    'user/:loginname': {
        component: (resolve) => {
            require(['./component/userView.vue'], resolve)
        }
    },
    '/signin': {
        component: (resolve) => {
            require(['./component/signin.vue'], resolve)
        }
    },
    '/signout': {
        component: (resolve) => {
            require(['./component/signout.vue'], resolve)
        }
    }
})

var App = Vue.extend({})

router.start(App, '#app')