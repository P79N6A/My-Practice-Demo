const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const OptimizeCSSAssertsPlugin = require('optimize-css-assets-webpack-plugin')

const extractCSS = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css'
})
const extractLESS = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css'
})

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    // 从哪里读取文件
    contentBase: './dist',
    // 是否开启 HMR
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './',
            }
          },
          // 'style-loader',
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // 设置的是 css 文件里面的 url 相对于该 css 文件的位置
              publicPath: './'
            }
          },
          // 'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2000
          }
        }
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader'
      //   }
      // }
    ]
  },
  plugins: [
    // 默认是会清空掉 output.path 所在目录
    new CleanWebpackPlugin(),
    // 根据 template 的 html 生成对应的 html
    // 并且把生成的 script 插入
    new HtmlWebpackPlugin({
      // 这个是会根据 template 的 title 的
      title: '加油鸭',
      template: './index.html'
    }),
    // 提取 CSS 文件
    extractCSS,
    extractLESS,
    // HMR 相关
    // 查看要修改(patch)的模块
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // 压缩CSS
    new OptimizeCSSAssertsPlugin()
  ]
}