import Vue from 'vue'
import Vuex from 'vuex'
import Tool from '../Tool'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        user: JSON.parse(Tool.localItem('user')) || {}, //当前登录的用户信息
        sideBar: false // true展开菜单，false不展开菜单
    },
    mutations: {
        /**
         * 显示菜单
         * 
         * @param {Object} state
         */
        sideBarShow: (state) => {
            state.sideBar = true //显示菜单
        },
        /**
         * 关闭菜单
         * 
         * @param {Object} state
         */
        sideBarHide: (state) => {
            state.sideBar = false //关闭菜单
        },
        /**
         * 登录成功
         * 
         * @param {Object} state
         * @param {Object} user
         */
        signin: (state, user) => {
            state.user = user
            Tool.localItem('user', JSON.stringify(user))
        },
        /**
         * 退出登录
         * 
         * @param {Object} state
         */
        signout: (state) => {
            state.user = {}
            Tool.removeLocalItem('user')
        },
    }
})

export default store