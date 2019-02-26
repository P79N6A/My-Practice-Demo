const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    main: './1.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'test'
    }),
    new CleanWebpackPlugin(['dist'])
  ]
}