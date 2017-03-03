const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

const app = express()
const compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: 'normal'
})

app.use(devMiddleware)

app.listen(3000, (err) => {
  if (err) return console.log(err)
  console.log('http://localhost:3000/')
})