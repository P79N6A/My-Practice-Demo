// manifest
var path = require('path')

module.exports = {
  entry: {
    main: './1.js',
    app: './2.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  }
}