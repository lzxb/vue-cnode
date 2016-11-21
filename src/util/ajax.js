import is from 'is'
const getPageKey = () => { //获取当前页面key值，由vue-router生成
    return is.object(history.state) ? history.state.key : location.href
}
/**
 * 异步中间件方法调用
 */
const nextMethod = (list = [], param = {}, complete = () => { }) => {
    var _list = list.map((active, index) => {
        return () => {
            const next = _list[index + 1] //下一个方法
            if (next) {
                active(param, next) //执行当前方法
            } else {
                active(param, () => { //完成执行
                    complete(param)
                })
            }
        }
    })
    setTimeout(_list[0](param), 0) //异步执行
}
const filter = (str) => { //特殊字符转义
    str += '' //隐式转换
    str = str.replace(/%/g, '%25')
    str = str.replace(/\+/g, '%2B')
    str = str.replace(/ /g, '%20')
    str = str.replace(/\//g, '%2F')
    str = str.replace(/\?/g, '%3F')
    str = str.replace(/&/g, '%26')
    str = str.replace(/\=/g, '%3D')
    str = str.replace(/#/g, '%23')
    return str
}

var _startIntercept = [] //开始的拦截器
var _endIntercept = [] //结束的拦截器
var _win = window

var ajax = (option) => { //ajax请求方法
    const key = getPageKey()
    var setting = {
        url: _win.location.pathname,
        type: 'GET',
        data: {},
        dataType: 'json',
        success() {

        },
        error() {

        }
    }
    //开始拦截器
    Object.assign(setting, option) //覆盖默认配置
    nextMethod(_startIntercept, setting, () => {
        var query = []
        Object.keys(setting.data).forEach((k) => query.push(`${k}=${filter(setting.data[k])}`))
        var xhr = new XMLHttpRequest()

        if (setting.type.toUpperCase() == 'GET') { // get请求方法
            xhr.open('GET', setting.url + '?' + query.join('&') + '&' + new Date().getTime(), true)
            xhr.send()
        } else { // post请求
            xhr.open(setting.type, setting.url, true)
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
            xhr.send(query.join('&'))
        }
        xhr.onloadend = ({ currentTarget }) => { //请求结束执行方法
            var { response } = currentTarget
            if (/application\/json/.test(currentTarget.getAllResponseHeaders()) || setting.dataType === 'json' && /^(\{|\[)([\s\S])*?(\]|\})$/.test(response)) {

                if (key == getPageKey()) nextMethod(_endIntercept, JSON.parse(response), setting.success)
            } else {
                if (key == getPageKey()) nextMethod(_endIntercept, null, setting.error)
            }
        }
    })

}
/**
 * 开始请求的拦截器
 */
ajax.beforeEach = (callback) => {
    _startIntercept.push(callback)
}
/**
 * 请求结束的拦截器
 */
ajax.afterEach = (callback) => {
    _endIntercept.push(callback)
}
export default ajax