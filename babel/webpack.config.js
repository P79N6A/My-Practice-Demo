module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './1.js'],
  output: {
    filename: 'haha.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader']
      }
    ]
  }
}