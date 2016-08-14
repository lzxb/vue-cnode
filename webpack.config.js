var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin') //生成html
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包

var publicPath = '/dist/' //服务器路径
var path = __dirname + '/dist/'
var loaders = []



// 将ES6代码转换成ES5
loaders.push({
    test: /\.js$/,
    exclude: 'node_modules',
    loader: 'babel?presets=es2015'
})
//处理 vue 文件
loaders.push({
    test: /\.vue$/,
    exclude: 'node_modules',
    loader: 'vue'
})
//处理 less，css
loaders.push({
    test: /\.less|\.css/,
    exclude: /^node_modules$/,
    loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
})

loaders.push({
    test: /\.(png|jpg)$/,
    exclude: /^node_modules$/,
    loader: 'url?limit=20000&name=[name].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
})

loaders.push({
    test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
    exclude: /^node_modules$/,
    loader: 'file-loader?name=[name].[ext]'
})
var plugins = []

if (process.argv.indexOf('-p') > -1) { //生产环境
    plugins.push(new webpack.DefinePlugin({ //编译成生产版本
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }))
}
plugins.push(new ExtractTextPlugin('[name].css')); //css单独打包

plugins.push(new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
    filename: '../index.html', //生成的html存放路径，相对于 path
    template: './src/template/index.html', //html模板路径
    hash: true    //为静态资源生成hash值
}))

if (process.argv.indexOf('-pages') > -1) { //发布到git pages
    publicPath = '/vue-cnode/dist/'
    path = __dirname + '/vue-cnode/dist/'
}

module.exports = {
    entry: './src/main.js',
    output: {
        publicPath, //服务器的路径
        path, //编译到app目录
        filename: '[name].js' //编译后的文件名
    },
    module: {
        loaders: loaders
    },
    plugins: plugins,
    resolve: {
        extensions: ['', '.js', '.vue'], //后缀名自动补全
    }
}

