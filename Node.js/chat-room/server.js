const http = require('http')
const fs = require('fs')
const path = require('path')
const Server = require('socket.io')

const server = http.createServer((request, response) => {
  if (request.url == '/' && request.method.toUpperCase() === 'GET') {
    fs.readFile(path.join(__dirname, './index.html'), 'utf8', (err, data) => {
      response.writeHead(200, { 'Content-Type': 'text/html'})
      response.end(data)
    })
  } else {
    response.end()
  }
})

const io = new Server(server)

io.on('connection', (socket) => {
  console.log('an user connected')
  // socket.on('disconnect', () => {
  //   console.log('user disconnected')
  // })
  socket.on('chat message', (msg) => {
    console.log(new Buffer.from(msg).toString('utf8'))
    io.emit('chat message', msg)
  })
})

server.listen(8877, () => {
  console.log('port 8877 is listening')
})