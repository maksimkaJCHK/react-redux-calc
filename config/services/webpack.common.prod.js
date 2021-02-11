const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
    usedExports: true,
    minimizer: [new TerserPlugin({
      test: /\.js(\?.*)?$/i,
      parallel: true,
      extractComments: true,
      terserOptions: {
        output: {
          comments: false,
        },
        compress: {
          drop_console: true,
        },
      }
    })],
  },
};