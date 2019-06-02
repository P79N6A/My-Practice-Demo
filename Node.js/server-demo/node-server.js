const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/download') {
    // fs.readFile('node-server.js', (err, data) => {
    //   res.setHeader('Content-Disposition', 'attachement; filename=123.js');
    //   res.write(data);
    //   res.end();
    // })

    res.setHeader('Content-Disposition', 'attachement; filename=123.js');
    fs.createReadStream('node-server.js').pipe();
    res.end();
  }
});

server.listen(7777, () => {
  console.log('port 7777 is listening');
})