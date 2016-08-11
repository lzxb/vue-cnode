import Vue from 'vue'
import Vuex from 'vuex'
import Tool from '../Tool'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        user: {}, //当前登录的用户信息
        sideBar: false // true展开菜单，false不展开菜单
    },
    mutations: {
        sideBarShow: (state) => {
            state.sideBar = true //显示菜单
        },
        sideBarHide: (state) => {
            state.sideBar = false //关闭菜单
        }
    }
})

export default store