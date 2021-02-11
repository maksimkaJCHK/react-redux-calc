const { merge } = require('webpack-merge');
const common = require('./services/webpack.common.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackCommonProd = require('./services/webpack.common.prod.js');

module.exports = merge(common, webpackCommonProd, {
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: "ts-loader",
      },
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              config: {path: 'postcss.config.js'},
            }
          }
        ]
      }, {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
          },
          "sass-loader" 
        ]
      }, {
        test: /\.twig$/,
        use: [
          'raw-loader',
          'twig-html-loader'
        ]
      }, {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              esModule: false,
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/[name]-js.css',
      chunkFilename: '[id].css',
    }),
  ],
})
