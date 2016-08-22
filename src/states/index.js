import pages from '../config/pages'
import page from './page'
import Tool from '../Tool'

var states = {}

states.user = JSON.parse(Tool.localItem('user')) || {} //当前登录的用户信息

states.sideBar = false //true展开菜单，false不展开菜单

const newPage = (name) => {
    states[name] = page()
}


pages.map((item) => newPage(item)) //创建页面对应的state

export default states
