const { injectBabelPlugin } = require('react-app-rewired');
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
  // 这里 config.xxxx 来添加要新加的配置
  // 说白了，还是要熟悉 webpack 的配置方法才行~
  config.resolve.alias = {
    '@': resolve('src')
  }
  return config;
};