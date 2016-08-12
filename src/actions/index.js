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
 * 保存令牌
 */
export const signin = ({dispatch}, user) => {
    dispatch('signin', user)
}

export const signout = ({dispatch}) => {
    dispatch('signout')
}