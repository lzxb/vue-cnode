import pages, {actions} from '../config/pages'

export default (...arg) => {
    var action = {
        SIDE_BAR_SHOW({ dispatch }) { //显示侧边栏
            dispatch('SIDE_BAR_SHOW')
        },
        SIDE_BAR_HIDE({dispatch}) { //隐藏菜单
            dispatch('SIDE_BAR_HIDE')
        },
        SIGNIN({dispatch}, user) { //登录
            dispatch('SIGNIN', user)
        },
        SIGNOUT({dispatch}) { //退出
            dispatch('SIGNOUT')
        },
        MSG_NUM({dispatch}, ...arg) { //设置用户消息数量
            dispatch('MSG_NUM', ...arg)
        }
    }
    /**
     * 更新用户的消息数量
     */

    const newPage = (name) => { //设置页面行为
        if (!name) return
        for (let i = 0; i < actions.length; i++) {
            action[actions[i]] = function ({dispatch}, ...arg) {
                dispatch(`${name}${actions[i]}`, ...arg)
            }
        }
    }
    newPage(...arg) //创建页面对应的action
    return action
}