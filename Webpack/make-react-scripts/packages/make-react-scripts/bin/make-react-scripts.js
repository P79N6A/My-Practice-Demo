// 原来是要引入一个包的，这里木有办法引入啦，就这样写咯
const spawn = require('../../react-dev-utils/crossSpawn')
const path = require('path')

const type = process.argv.slice(2)[0]

switch (type) {
  case 'start': {
    // 调用 cmd 执行 ../scripts/start.js
    const execPath = path.resolve(__dirname, '../scripts/' + type + '.js')
    spawn(execPath)
  }
}