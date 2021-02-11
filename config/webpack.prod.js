const { merge } = require('webpack-merge');
const common = require('./services/webpack.common.js');
const services = require('./services/webpack.services.js');
const webpackCommonProd = require('./services/webpack.common.prod.js');

module.exports = merge(common, services, webpackCommonProd);
