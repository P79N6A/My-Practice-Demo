// 原来是引用了个 cross-spawn 的，这里为了简单和学习，就不引用啦


const spawn = require('child_process').spawn
const fs = require('fs')

const crossSpawn = function (path) {
  console.log(path)
  const node = spawn('node', [path])
  console.log(fs.realpathSync(process.cwd()))

  node.stdout.on('data', (data) => {
    console.log(data.toString())
  })
}

module.exports = crossSpawn