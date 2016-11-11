import is from 'is'
import ajax from 'superagent' //ajax 请求库
import config from 'config'

export default {
    get(url, query = {}, success = () => { }, error = () => { }, end = () => { }) {
        var bool = true //true允许回调方法，false不再执行回调
        ajax('GET', config.target + url).query(query).end((err, res = {}) => {
            if (!bool) return //防止继续执行回调
            if (res.body && is.object(res.body)) {
                success(res.body)
            } else {
                error({})
            }
            end(res.body)
        })
        return () => {
            bool = false
        }
    },
    post(url, body = {}, success = () => { }, error = () => { }, end = () => { }) {
        var bool = true //true允许回调方法，false不再执行回调
        ajax('POST', config.target + url).send(body).end((err, res = {}) => {
            if (!bool) return //防止继续执行回调
            if (res.body && is.object(res.body)) {
                success(res.body)
            } else {
                error({})
            }
            end(res.body)
        })
        return () => {
            bool = false
        }
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