const http = require('http');
const formidable = require('formidable');

const server = http.createServer((req, res) => {
  if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
    // 创建
    const form = new formidable.IncomingForm();
    // 设置各种东东
    form.uploadDir = './dir' // 上传目录
    form.keepExtensions = true // 是否保留文件后缀
    form.hash = true
    // 开始解析
    form.parse(req, (err, fields, files) => {
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.write('received upload');
      res.end();
    });
  }
});

server.listen(7777, () => {
  console.log('port 7777 is listening');
})