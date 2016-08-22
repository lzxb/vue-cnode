import Tool from '../Tool'
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

    mutationss[`${name}SET_VIEW`] = (state, view) => { //获取页面数据成功
        state[name].view = view
        state[name].loadState = 1
        state[name].loadTip = '加载成功'
    }

    mutationss[`${name}SET_LIST`] = (state, list) => { //获取页面数据成功
        state[name].list = list
        state[name].loadState = 1
        state[name].loadTip = '加载成功'
    }

    mutationss[`${name}PAGE_ERROR`] = (state, {loadTip = '加载失败', loadState = -1}) => { //获取页面数据失败
        state[name].loadState = loadState
        state[name].loadTip = loadTip
    }

    mutationss[`${name}LEAVE`] = (state) => { //离开页面，保存滚动条位置
        state[name].scrollX = window.scrollX
        state[name].scrollY = window.scrollY
    }

    mutationss[`${name}SET_PATH`] = (state, path = '') => { //设置状态状态是在那个路径使用
        state[name].path = path
    }

    mutationss[`${name}RESET`] = (state) => { //重置组件状态
        var newState = pageState()

        for (let k in newState) {
            state[name][k] = newState[k]
        }

    }

    mutationss[`${name}SET_VIEW_KEY`] = (state, view) => {
        for (let k in view) {
            state[name].view[k] = view[k]
        }

    }
}

pages.map((item) => newPage(item)) //创建页面对应的mutationss

export default mutationss

