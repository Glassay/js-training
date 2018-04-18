const HtmlWebpackPlugin = require('html-webpack-plugin'); // install-via-npm
const webpack = require('webpack'); // to access built-in plugins

module.exports = {
  mode: 'production',
  // 入口文件名称
  entry: './index.js',
  // 出口文件名称
  output: {
    filename: 'bundle.js'
  },
  // 处理不同文件所需要的loader
  module: {
    rules: [
      { test: /\.css$/, use: [ { loader: 'style-loader' }, { loader: 'css-loader' } ]}
    ]
  },
  // 开启 source-map
  devtool: 'inline-source-map',
  devServer: {
    compress: true, // 让 dev-server 启动 gzip 压缩
    hot: true, // 让 dev-server 启动 HMR 功能
  },
  // 添加 plugin 的配置选项
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
