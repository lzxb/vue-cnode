const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  target: 'web',
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/vue-cnode/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              postcss: [
                require('autoprefixer')({
                  browsers: ['iOS >= 7', 'Android >= 4.1']
                })
              ]
            }
          },
          'eslint-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader', 
          {
            loader: 'postcss-loader',
            options: {
              plugins () {
                return [
                  require('autoprefixer')({
                    browsers: ['iOS >= 7', 'Android >= 4.1']
                  })
                ]
              }
            }
          }
        ]
      }, 
      {
        test: /\.less$/,
        use: [
          'style-loader', 
          'css-loader', 
          {
            loader: 'postcss-loader',
            options: {
              plugins () {
                return [
                  require('autoprefixer')({
                    browsers: ['iOS >= 7', 'Android >= 4.1']
                  })
                ]
              }
            }
          },
          'less-loader'
        ]
      }, 
      {
        test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
        use: ['file-loader']
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src/template/index.html') })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'config': path.resolve(__dirname, 'src/config/config.js'), //程序的一些基本配置
      'store': path.resolve(__dirname, 'src/store/'), //常用工具方法
      'util': path.resolve(__dirname, 'src/util/index.js'), //常用工具方法
      'is-seeing': path.resolve(__dirname, 'src/util/is-seeing.js'),
      'pull-list': path.resolve(__dirname, 'src/mixins/pull-list.js'), //拉取列表
      'route-data': path.resolve(__dirname, 'src/lib/route-data/index.js') //页面数据缓存
    },
    extensions: ['.js', '.vue', '.json']
  },
  devtool: '#cheap-module-eval-source-map'
}