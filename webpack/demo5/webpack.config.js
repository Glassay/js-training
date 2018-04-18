const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    index: './index.js'
  },
  output: {
    filename: '[name].bundle.js',
    // 使用 chunkFilename 来实现动态加载
    chunkFilename: '[name].budle.js'
  }
}