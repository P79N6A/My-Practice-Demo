const fs = require('fs')
const path = require('path')

var url = './1.jpg'
var filePath = path.join(__dirname, url)
console.log(filePath)

fs.stat(filePath, (err, stats) => {
  if (err) {
    console.log(err)
  } else {
    console.log(stats)
  }
})