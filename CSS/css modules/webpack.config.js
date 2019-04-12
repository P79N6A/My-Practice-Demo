const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: './main.js',
  output: {
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          // 设置的是 css 文件里面的 url 相对于该 css 文件的位置
          options: {
            publicPath: './'
          }
        }, 'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'css modules',
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}