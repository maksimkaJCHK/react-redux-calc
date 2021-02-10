const paths = require('./paths')

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const services = require('./webpack.services.js')

module.exports = merge(common, services, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: paths.public,
    open: true,
    compress: false,
    hot: true,
    port: 8080,
    publicPath: '/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})
