var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

// 相当于通过本地node服务代理请求到了http://cnodejs.org/api
var proxy = [{
    path: '/api/*',
    target: 'https://cnodejs.org',
    host: 'cnodejs.org'
}]

//启动服务
var server = new WebpackDevServer(webpack(config), {
    publicPath: './',
    proxy: proxy
})

//将其他路由，全部返回index.html
server.app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})
server.listen(3000)