const path = require('path')
const configs = require('./configs/')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extract = new ExtractTextPlugin('css/[name].[hash].css')
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
    main: ['babel-polyfill', 'whatwg-fetch', './src/main.js']
  },
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, `${configs.dest}static`),
    publicPath: configs.publicPath
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
        test: /\.(eot|woff|svg|ttf|woff2|)(\?|$)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'iconfont/[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2000,
              name: 'images/[name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/template/index.html'),
      filename: '../index.html',
      title: configs.title,
      hash: true,
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
      'utils$': path.resolve(__dirname, 'src/utils/index.js'), //常用工具方法
      'is-seeing$': path.resolve(__dirname, 'src/utils/is-seeing.js'),
      'http$': path.resolve(__dirname, 'src/http/index.js'),
    },
    extensions: ['.js', '.vue', '.json']
  },
  devtool: false
}