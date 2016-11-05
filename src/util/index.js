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
    }
}