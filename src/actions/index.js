import pages, {actions} from '../config/pages'

export default (...arg) => {
    var action = {}
    /**
     * 显示菜单
     */
    action.SIDE_BAR_SHOW = ({ dispatch }) => {
        dispatch('SIDE_BAR_SHOW')
    }
    /**
     * 隐藏菜单
     */
    action.SIDE_BAR_HIDE = ({dispatch}) => {
        dispatch('SIDE_BAR_HIDE')
    }
    /**
     * 登录
     */
    action.SIGNIN = ({dispatch}, user) => {
        dispatch('SIGNIN', user)
    }
    /**
     * 退出
     */
    action.SIGNOUT = ({dispatch}) => {
        dispatch('SIGNOUT')
    }
    /**
     * 更新用户的消息数量
     */
    action.MSG_NUM = ({dispatch}, ...arg) => {
        dispatch('MSG_NUM', ...arg)
    }

    const newPage = (name) => { //设置页面行为
        if (!name) return
        for(let i=0;i<actions.length;i++) {
            action[actions[i]] = ({dispatch}, ...arg) => {
                dispatch(`${name}${actions[i]}`, ...arg)
            }  
        }
    }
    newPage(...arg) //创建页面对应的action
    return action
}