const webpack = require('webpack');

module.exports = {
  mode: 'production',
  // 入口文件
  entry: {
    index: './index.js',
    mobile: './mobile.js',
  },
  // 出口文件
  output: {
    filename: '[name].bundle.js',
  },
}