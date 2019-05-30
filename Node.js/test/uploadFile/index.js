const http = require('http');
const formidable = require('formidable');
const form = new formidable.IncomingForm();

http.createServer((req, res) => {
  if (req.url === '/test') {
    // form.uploadDir = './img';
    // form.parse(req,function(err,fields,files){
    //   if(err) throw err;
    //   console.log(files);
    //   res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    //   res.end('表单提交成功！');
    // });
    let data = [];
    req.on('data', chunk => {
      data.push(chunk);
    })
    req.on('end', () => {
      let result = data.join('');
      console.log(result);
      res.end();
    })
  }
  // res.end('haha');
}).listen(7788, () => {
  console.log('7788 is listening');
});