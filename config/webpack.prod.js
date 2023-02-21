const { merge } = require('webpack-merge');
const webpack = require('webpack');

const common = require('./services/webpack.common.js');
const webpackProdConfug = require('./services/webpack.common.prod.js');

const env_variables = require('./services/env_variables.js');

module.exports = merge(common, webpackProdConfug, {
  plugins: [
    new webpack.EnvironmentPlugin(env_variables)
  ]
});
