import pages from '../config/pages'

var actions = {}
/**
 * 显示菜单
 */
actions.sideBarShow = ({ dispatch }) => {
    dispatch('sideBarShow')
}
/**
 * 隐藏菜单
 */
actions.sideBarHide = ({dispatch}) => {
    dispatch('sideBarHide')
}
/**
 * 登录
 */
actions.signin = ({dispatch}, user) => {
    dispatch('signin', user)
}
/**
 * 退出
 */
actions.signout = ({dispatch}) => {
    dispatch('signout')
}

const newPage = (name) => {
    actions[`${name}GetSuccess`] = ({dispatch}, data) => { //获取页面数据成功
        dispatch(`${name}GetError`, data)
    }
    actions[`${name}GetError`] = ({dispatch}) => { //获取页面数据失败
        dispatch(`${name}GetError`)
    }
    actions[`${name}Leave`] = ({dispatch}) => { //离开页面，保存滚动条位置
        dispatch(`${name}Leave`)
    }
}

pages.map((item) => newPage(item)) //创建页面对应的action

export default actions;