const fork = require('child_process').fork
const cpus = require('os').cpus()

console.log(cpus.length)
for (let i = 0; i < cpus.length; i++) {
  fork('./worker.js')
}