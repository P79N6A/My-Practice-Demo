var formidable = require('formidable'),
    http = require('http'),
    util = require('util');

http.createServer(function(req, res) {
  if (req.url == '/start' && req.method.toLowerCase() == 'post') {
    // parse a file upload
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
      console.log(fields)
      res.writeHead(200, {'content-type': 'text/plain'});
      res.end()
      // res.write('received upload:\n\n');
      // res.end(util.inspect({fields: fields, files: files}));
    });

    return;
  }

  // show a file upload form
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    '<form id="form" action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="button" value="Upload" id="submit-btn">'+
    '</form>'+
    `<script>
    let config = {
      baseUrl: 'http://localhost:8080'
    }
    
    function ajax (url, method, data = null, headers = {}) {
      const xhr = new XMLHttpRequest()
    
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log('请求成功')
        }
      }
    
      xhr.open(method.toUpperCase(), url)
      for (let key in headers) {
        xhr.setRequestHeader(key, headers[key])
      }
      xhr.send(data)
    }
    
    var submitBtn = document.getElementById('submit-btn')
    submitBtn.onclick = function (e) {
      let form = document.getElementById('form')
      let formData = new FormData(form)
      ajax('http://localhost:8080/start', 'POST', formData)
    }
    </script>`
  );
}).listen(8080);