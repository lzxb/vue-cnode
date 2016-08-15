/**
 * 显示菜单
 */
export const sideBarShow = ({ dispatch }) => {
    dispatch('sideBarShow')
}
/**
 * 隐藏菜单
 */
export const sideBarHide = ({dispatch}) => {
    dispatch('sideBarHide')
}
/**
 * 登录
 */
export const signin = ({dispatch}, user) => {
    dispatch('signin', user)
}
/**
 * 退出
 */
export const signout = ({dispatch}) => {
    dispatch('signout')
}