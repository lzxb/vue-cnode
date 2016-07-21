import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
var router = new VueRouter({
    history:true
})

router.map({
    '/': {
        component: (resolve) => {
            require(['./component/indexList.vue'], resolve)
        }
    },
    '/topic/:id': {
        component: (resolve) => {
            require(['./component/topicId.vue'], resolve)
        }
    }
})

var App = Vue.extend({})

router.start(App, '#app')