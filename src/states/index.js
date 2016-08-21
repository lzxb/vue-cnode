import pages from '../config/pages'
import Tool from '../Tool'

var states = {}

states.user = JSON.parse(Tool.localItem('user')) || {} //当前登录的用户信息

states.sideBar = false //true展开菜单，false不展开菜单

const newPage = (name) => {
    states[name] = {
        data: {}, //用来存储页面信息
        list: [], //用来存储页面列表数据
        loadTip: '正在加载中...', //页面加载状态信息提示
        loadState: 0, // -1 = 加载失败，0 = 正在加载，1 = 加载成功
        scrollX: 0, //滚动条X坐标
        scrollY: 0 //滚动条Y坐标
    }
}


pages.map((item) => newPage(item)) //创建页面对应的state

export default states;
