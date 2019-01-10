const path = require('path')

const appDirectory = process.cwd()
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

var paths = {
  appDirectory: appDirectory,
  appPublic: resolveApp('public'),
  appSrc: resolveApp('src'),
  appIndexJs: resolveApp('src/index.js'),
  appBundle: resolveApp('dist')
}

module.exports = paths