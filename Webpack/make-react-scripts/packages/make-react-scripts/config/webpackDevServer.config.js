const paths = require('./paths')

module.exports = {
  contentBase: paths.appPublic,
  open: true,
  hot: true,
  host: '0.0.0.0',
  port: 9999
}