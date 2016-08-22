import Tool from '../Tool'
import pages from '../config/pages'
import pageState from '../states/page'
var mutationss = {}

/**
 * 显示菜单
 * 
 * @param {Object} state
 */
mutationss.sideBarShow = (state) => {
    state.sideBar = true //显示菜单
}
/**
 * 关闭菜单
 * 
 * @param {Object} state
 */
mutationss.sideBarHide = (state) => {
    state.sideBar = false //关闭菜单
}
/**
 * 登录成功
 * 
 * @param {Object} state
 * @param {Object} user
 */
mutationss.signin = (state, user) => {
    state.user = user
    Tool.localItem('user', JSON.stringify(user))
}
/**
 * 退出登录
 * 
 * @param {Object} state
 */
mutationss.signout = (state) => {
    state.user = {}
    Tool.removeLocalItem('user')
}

const newPage = (name) => {

    mutationss[`${name}SetView`] = (state, view) => { //获取页面数据成功
        state[name].view = view
        state[name].loadState = 1
        state[name].loadTip = '加载成功'
    }

    mutationss[`${name}SetList`] = (state, list) => { //获取页面数据成功
        state[name].list = list
        state[name].loadState = 1
        state[name].loadTip = '加载成功'
    }

    mutationss[`${name}GetError`] = (state, {loadTip = '加载失败', loadState = -1}) => { //获取页面数据失败
        state[name].loadState = loadState
        state[name].loadTip = loadTip
    }

    mutationss[`${name}Leave`] = (state) => { //离开页面，保存滚动条位置
        state[name].scrollX = window.scrollX
        state[name].scrollY = window.scrollY
    }

    mutationss[`${name}SetPath`] = (state, path = '') => { //设置状态状态是在那个路径使用
        state[name].path = path
    }

    mutationss[`${name}ReSet`] = (state) => { //重置组件状态
        var newState = pageState()

        for (let k in newState) {
            state[name][k] = newState[k]
        }

    }

    mutationss[`${name}SetViewKey`] = (state, view) => {
        for (let k in view) {
            state[name].view[k] = view[k]
        }

    }
}

pages.map((item) => newPage(item)) //创建页面对应的mutationss

export default mutationss

