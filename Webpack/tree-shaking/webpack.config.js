const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './main.js',
  output: {
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  }
}