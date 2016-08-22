import pages from '../config/pages'

export default (...arg) => {
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
        if (!name) return
        actions.SetView = ({dispatch}, view) => { //存储页面信息
            dispatch(`${name}SetView`, view)
        }
        actions.SetList = ({dispatch}, list) => { //存储页面列表信息
            dispatch(`${name}SetList`, list)
        }
        actions.SetPath = function ({dispatch}, path) { //离开页面，保存滚动条位置
            dispatch(`${name}SetPath`, path)
        }
        actions.GetError = ({dispatch}, ...arg) => { //获取页面数据失败
            dispatch(`${name}GetError`, ...arg)
        }
        actions.Leave = ({dispatch}) => { //离开页面，保存滚动条位置
            dispatch(`${name}Leave`)
        }
        actions.ReSet = ({dispatch}) => { //重置组件状态
            dispatch(`${name}ReSet`)
        }
    }
    newPage(...arg) //创建页面对应的action
    return actions
}