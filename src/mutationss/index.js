import Tool from '../Tool'
import Vue from 'vue'
import pages from '../config/pages'
import pageState from '../states/page'
var mutationss = {}

/**
 * 显示菜单
 * 
 * @param {Object} state
 */
mutationss.SIDE_BAR_SHOW = (state) => {
    state.sideBar = true //显示菜单
}
/**
 * 关闭菜单
 * 
 * @param {Object} state
 */
mutationss.SIDE_BAR_HIDE = (state) => {
    state.sideBar = false //关闭菜单
}
/**
 * 登录成功
 * 
 * @param {Object} state
 * @param {Object} user
 */
mutationss.SIGNIN = (state, user) => {
    state.user = user
    Tool.localItem('user', JSON.stringify(user))
}
/**
 * 退出登录
 * 
 * @param {Object} state
 */
mutationss.SIGNOUT = (state) => {
    state.user = {}
    Tool.removeLocalItem('user')
}

const newPage = (name) => {

    mutationss[`${name}GET_DATA_VIEW`] = (state, view = {}) => { //获取页面数据成功
        state[name].view = view
        state[name].loadState = 1
        state[name].loadTip = '加载成功'
    }

    mutationss[`${name}GET_DATA_LIST`] = (state, list = []) => { //获取页面数据成功
        state[name].list = list
        state[name].loadState = 1
        state[name].loadTip = '加载成功'
    }
    
    mutationss[`${name}PULL_PAGE_LIST_PUSH`] = (state, list = []) => { //获取列表数据
        list.map(item => state[name].list.push(item))
        state[name].loadState = 1
        state[name].loadTip = '点击加载更多'
    }

    mutationss[`${name}GET_DATA_START`] = (state) => { //正在获取数据
        state[name].loadState = 0
        state[name].loadTip = '正在加载中...'
    }

    mutationss[`${name}GET_DATA_ERROR`] = (state, {loadTip = '加载失败', loadState = -1}) => { //获取页面数据失败
        state[name].loadState = loadState
        state[name].loadTip = loadTip
    }

    mutationss[`${name}LEAVE`] = (state) => { //离开页面，保存滚动条位置
        state[name].scrollX = window.scrollX
        state[name].scrollY = window.scrollY
    }

    mutationss[`${name}RESET`] = (state, path = '') => { //重置组件状态
        var newState = pageState()

        for (let k in newState) {
            if (k != 'path') state[name][k] = newState[k]
        }
        state[name].path = path //设置当前组件使用的路径
    }

    mutationss[`${name}ADD_CUSTOM_KEY`] = (state, data = {}) => { //添加字段
        for (let k in data) {
            Vue.set(state[name], k, data[k])
        }

    }

    mutationss[`${name}SET_CUSTOM_KEY`] = (state, data = {}) => { //设置字段值
        for (let k in data) {
            state[name][k] = data[k]
        }
    }
}

pages.map((item) => newPage(item)) //创建页面对应的mutationss

export default mutationss

