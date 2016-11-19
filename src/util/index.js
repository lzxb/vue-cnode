import is from 'is'
// import ajax from 'superagent' //ajax 请求库
import config from 'config'
import ajax from './ajax'

ajax.before((res, next) => {
    res.url = 'https://cnodejs.org' + res.url
    res.data.type = true
    next()
})

ajax.after((res, next) => {
    next()
})

export default {
    get(url, data = {}, success = () => { }, error = () => { }, complete = () => { }) {
        ajax({ url, data, success, error, complete, type: 'GET' })
    },
    post(url, body = {}, success = () => { }, error = () => { }, end = () => { }) {
    },
    getPageKey() {
        return is.object(history.state) ? history.state.key : location.href
    },
    /**
     * 消息消失框
     */
    toast(msg = '', time = 1500) {
        var toast = document.createElement('div')
        toast.className = 'common-toast common-toast-show'
        toast.innerHTML = msg
        document.body.appendChild(toast)
        toast.style.display = 'block'
        toast.style.margin = `-${toast.offsetHeight / 2}px 0 0 -${toast.offsetWidth / 2}px`
        var timer = setTimeout(() => {
            toast.className = 'common-toast common-toast-hide'
            clearTimeout(timer)
            var timer2 = setTimeout(() => {
                document.body.removeChild(toast)
                clearTimeout(timer2)
            }, 200)
        }, time)
    }
}