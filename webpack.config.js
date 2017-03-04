const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extract = new ExtractTextPlugin('css/[name].css')
const autoprefixer = require('autoprefixer')({ browsers: ['iOS >= 7', 'Android >= 4.1'] })
const IS_ENV = process.env.NODE_ENV == 'production'

const plugins = []
if (IS_ENV) {
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }))
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    sourceMap: true
  }))
}

module.exports = {
  target: 'web',
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist/js'),
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
              loaders: {
                css: ExtractTextPlugin.extract({
                  use: ['css-loader'],
                  fallback: 'vue-style-loader'
                }),
                less: ExtractTextPlugin.extract({
                  use: ['css-loader', 'less-loader'],
                  fallback: 'vue-style-loader'
                })
              },
              postcss: [autoprefixer]
            }
          },
          'eslint-loader'
        ]
      },
      {
        test: /\.css$/,
        use: extract.extract([
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer]
            }
          }
        ])
      },
      {
        test: /\.less$/,
        use: extract.extract([
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer]
            }
          },
          'less-loader'
        ])
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/template/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    extract
  ].concat(plugins),
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'config': path.resolve(__dirname, 'src/config/config.js'), //程序的一些基本配置
      'stores': path.resolve(__dirname, 'src/stores/'), //常用工具方法
      'util': path.resolve(__dirname, 'src/util/index.js'), //常用工具方法
      'is-seeing': path.resolve(__dirname, 'src/util/is-seeing.js'),
      'pull-list': path.resolve(__dirname, 'src/mixins/pull-list.js'), //拉取列表
      'route-data': path.resolve(__dirname, 'src/libs/route-data/index.js') //页面数据缓存
    },
    extensions: ['.js', '.vue', '.json']
  },
  devtool: IS_ENV ? false : '#cheap-module-eval-source-map'
}