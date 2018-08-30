## Webpack 学习记录

## 1. 基本概念

四个核心概念：

* 入口（entry）
* 出口（output）
* loader
* 插件（plugins）

### 入口起点（entry point）

指示 webpack 应该使用哪个模块来作为构建内部依赖图的开始，进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。你可以配置单个或多个入口。



### 出口（output）

来告诉 webpack 在哪里输出创建的 bundles 以及如何命名 bundles 文件。

### loader

loader可以说是 webpack 的核心，它可以将所有类型的文件转换成 webpack 能够处理的有效模块

### 插件（plugins）

插件用于执行更广泛的任务，包括从打包优化和压缩，一直到重新定义环境中的变量



### 安装

在 Terminal 中输入 `npm i webpack-cli -g`，安装完成后输入 `webpack -v` 输出版本号就代表安装成功！

### 初步使用

新建文件夹 `webpack`，在文件夹下新建两个文件 `index.js` 和 `main.js`。

### 错误整理

* `Error: Cannot find module 'webpack-cli/bin/config-yargs'`

  详情见[issuse](https://github.com/rails/webpacker/issues/1295)，解决办法：

  webpacl4 需要执行命令 `yarn add webpack-cli -D`，然后在执行 `npm start`，`webpack-dev-server` 应该就配置成功了。

* 在尝试分离第三方依赖库时，使用的是 CommonsChunkPlugin ，但在 webpack4 下报错：

  `Error: webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.`

  意思是说 webpack4 已经不支持通过 commonsChunkPlugin 来分离第三方依赖，并建议我们使用 splitChunks 代替，具体修改方式如下：

  ```js
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
  ```

  这时我们再运行 `npm run build:vendor` 会看到如下信息就代表分离成功了

  ![splitChunks](http://p8pobg42e.bkt.clouddn.com/splitChunks.png)

会看到新生成了一个 `vender.bundle.js` 文件，存放的是单独的第三方库的文件。