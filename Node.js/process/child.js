// child.js
var http = require('http');
var server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain'} );
  res.end('haha')
})

process.on('message', (m, tcp) => {
  if (m === 'server') {
    tcp.on('connection', socket => {
      server.emit('connection', socket);
    })
  }
})
