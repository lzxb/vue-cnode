const API = 'https://cnodejs.org/api/v1'

const filter = (str) => { // 特殊字符转义
  str += '' // 隐式转换
  str = str.replace(/%/g, '%25')
  str = str.replace(/\+/g, '%2B')
  str = str.replace(/ /g, '%20')
  str = str.replace(/\//g, '%2F')
  str = str.replace(/\?/g, '%3F')
  str = str.replace(/&/g, '%26')
  str = str.replace(/=/g, '%3D')
  str = str.replace(/#/g, '%23')
  return str
}
const queryStr = (data) => {
  const query = []
  Object.keys(data).forEach((k) => query.push(`${k}=${filter(data[k])}`))
  return query.join('&')
}

export default {
  async get (url, data = {}) {
    const search = queryStr(data)
    const arr = [`${API}${url}`]
    if (search) {
      arr.push(search)
    }
    return fetch(arr.join('?')).then(response => response.json())
  },
  async post (url, data = {}) {
    const body = queryStr(data)
    const arr = [`${API}${url}`]
    if (body) {
      arr.push(body)
    }
    return fetch(arr.join('?'), {
      body,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(response => response.json())
  }
}
