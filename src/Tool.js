import ajax from 'superagent' //ajax 请求库

const Tool = {}

/**
 * get 请求获取数据
 * 
 * @param {String} url 请求的地址
 * @param {Object} [query={}] 发送的参数
 * @param {Function} [success=() => { }] 请求成功执行回调
 * @param {Function} [error=() => { }] 请求失败执行回调
 */
Tool.get = (url, query = {}, success = () => { }, error = () => { }) => {
    // ajax('GET', url).query(query).then((res) => {
    //     success(res.body)
    // }, (res) => {
    //     error({ success: false })
    // })

    ajax('GET', url).query(query).end((err, res) => {
        if(err) {
            return error({
                error: true
            })
        } else {
            success(res.body)
        }
    })

}
export default Tool