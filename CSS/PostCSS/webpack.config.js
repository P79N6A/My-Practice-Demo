const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const px2rem = require('postcss-px2rem')

const resolve = (p) => path.join(__dirname, p)

module.exports = {
  entry: './main.js',
  output: {
    path: resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, 'css-loader', 
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => [
              require('postcss-preset-env'),
              px2rem({remUnit: 100, threeVersion: true})
            ]
          }
        }
      ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}