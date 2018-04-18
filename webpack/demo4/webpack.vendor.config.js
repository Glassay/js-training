const webpack = require('webpack'); // to access build-in plugin

module.exports = {
  mode: 'production',
  // 入口文件名称
  entry: {
    index: './index.js',
    mobile: './mobile.js',
    // 新添 vender 入口
    vendor: ["lodash"],
  },
  // 使用 splitChunks 分离第三方库
  optimization: {
    runtimeChunk: {
        name: "vendor"
    },
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendor",
                chunks: "all"
            }
        }
    }
  },
  output: {
    filename: '[name].bundle.js'
  }
}
