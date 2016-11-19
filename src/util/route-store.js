export default class Store {
    constructor() {
        this.data = {} //存储页面数据
        this.changeList = []
    }
    setItem(url, data) { //设置项目信息
        this.changeList.forEach((fn) => fn(data, this.data[url], url))
        this.data[url] = data
    }
    getItem(url) { //获取数据
        if (url) {
            return this.data[url]
        } else {
            return this.data
        }
    }
    change(fn) { //数据改变执行回调
        this.changeList.push(fn)
    }
    getUrl({path, query}) {
        var q = []
        Object.keys(query).forEach((v) => q.push(`${v}=${query[v]}`))
        return [path, q.join('&')].join('?')
    }
}