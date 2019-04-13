const baseConfig = require('./webpack.base.config')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const path = require('path')

module.exports = merge(baseConfig, {
  entry: path.join(__dirname, '../src/entry-server.js'),
  output: {
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  devtool: 'source-map',
  externals: nodeExternals({
    whilelist: /\.css$/
  }),
  plugins: [
    new VueSSRServerPlugin()
  ]
})