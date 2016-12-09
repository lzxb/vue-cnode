/**
 * 还原页面数据
 */
import RouterStore from './store'

const store = new RouterStore()

/**
 * 初始化
 */
const init = function($route) {
    if (typeof this.$options.routeData != 'function') {
        throw '必须是以方法返回对象'
    }
    this.$options.routeData._url = store.getUrl($route)
    var keepAlive = store.getItem(this.$options.routeData._url)
    if (keepAlive) {
        return keepAlive
    }
    return this.$options.routeData.call(this)
}
/**
 * 保存数据
 */
const saveData = function() {
    var data = this.$options.routeData()
    var newData = {}
    Object.keys(data).forEach((k) => newData[k] = this.$data[k])
    store.setItem(this.$options.routeData._url, newData)
}

export default {
    data() {
        return init.call(this, this.$route)
    },
    destroyed() { //组件卸载
        saveData.call(this) //存储数据
    },
    watch: {
        $route(to, from) { //当前组件路由发生改变
            saveData.call(this) //存储数据
            Object.assign(this.$data, init.call(this, to)) //重置路由数据
        }
    }
}