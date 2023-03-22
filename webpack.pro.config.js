const path = require('path');
// const { merge } = require('webpack-merge');
const merge = require('webpack-merge');
// import merge from "webpack-merge";
const commonConfig = require('./webpack.dev.config.js');
console.log(typeof merge);
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: path.resolve('src/index.js'),
  output: {
    path: path.resolve('release'),
    filename: '[name].entry.js',
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            root: path.resolve('./'),
            cacheDirectory: true,
          },
        },
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new BatchUploadTcloudPlugin(cdnParams),
  ],
});