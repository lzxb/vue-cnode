import pages from '../config/pages'

export default (...arg) => {
    var actions = {}
    /**
     * 显示菜单
     */
    actions.SIDE_BAR_SHOW = ({ dispatch }) => {
        dispatch('SIDE_BAR_SHOW')
    }
    /**
     * 隐藏菜单
     */
    actions.SIDE_BAR_HIDE = ({dispatch}) => {
        dispatch('SIDE_BAR_HIDE')
        window.scrollTo(0, 0)
    }
    /**
     * 登录
     */
    actions.SIGNIN = ({dispatch}, user) => {
        dispatch('SIGNIN', user)
    }
    /**
     * 退出
     */
    actions.SIGNOUT = ({dispatch}) => {
        dispatch('SIGNOUT')
    }

    const newPage = (name) => {
        if (!name) return
        actions.SET_VIEW = ({dispatch}, view) => { //存储页面信息
            dispatch(`${name}SET_VIEW`, view)
        }
        actions.SET_LIST = ({dispatch}, list) => { //存储页面列表信息
            dispatch(`${name}SET_LIST`, list)
        }
        actions.GET_DATA_ERROR = ({dispatch}, ...arg) => { //获取页面数据失败
            dispatch(`${name}GET_DATA_ERROR`, ...arg)
        }
        actions.LEAVE = ({dispatch}) => { //离开页面，保存滚动条位置
            dispatch(`${name}LEAVE`)
        }
        actions.RESET = ({dispatch}, ...arg) => { //重置组件状态
            dispatch(`${name}RESET`, ...arg)
        }
    }
    newPage(...arg) //创建页面对应的action
    return actions
}