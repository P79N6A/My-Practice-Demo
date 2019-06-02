const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end('<h1>haha</h1>');
});

server.listen(7777, () => {
  console.log('port 7777 is listening');
})