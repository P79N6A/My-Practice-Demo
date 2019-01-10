const paths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: [
    paths.appIndexJs
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        },
        include: paths.appSrc
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
        include: paths.appSrc
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(paths.appPublic, 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}