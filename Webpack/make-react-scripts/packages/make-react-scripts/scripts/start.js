console.log('start')

// 启动 webpack-dev-server，并且能够实时更新
// 1. 有个疑惑，怎么把 react 打包？ （用 babel）
// 2. 还有就是，dev 的时候，并没有生成 dist 的，这个时候怎么办？怎么启动的 webpack-dev-server
// （会打包文件的，只是没有显示的输出出来而已）
// （webpack-dev-server 是通过 Node API 来调用的）
// 如果用了 webpack-dev-server 的话，就不会看到编译后的文件的~~~

// 3. 为啥用了 node API 后， webpack-dev-serverd 的配置就没效了？open？

// const clearConsole = require('../../react-dev-utils/clearConsole')

const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('../config/webpack.dev.js')
const webpackDevServerConfig = require('../config/webpackDevServer.config.js')
 
// console.log(WebpackDevServer.addDevServerEntrypoints)
WebpackDevServer.addDevServerEntrypoints(webpackConfig, webpackDevServerConfig);

// webpackConfig.entry.unshift("webpack-dev-server/client?http://localhost:9999/");
const webpackCompiler = Webpack(webpackConfig)

const webpackDevServer = new WebpackDevServer(webpackCompiler, webpackDevServerConfig)

webpackDevServer.listen(9999, '0.0.0.0', () => {
  console.log('listening in 9999')
})