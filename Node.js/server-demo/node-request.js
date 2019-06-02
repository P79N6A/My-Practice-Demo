const http = require('http');

const server = http.createServer((req, res) => {
  const method = req.method.toUpperCase();
  switch (method) {
    case 'GET': {
      // ..
      handleGetMehtod(req, res);
      break;
    }
    case 'POST': {
      // ..
      handlePostMethod(req, res);
      break;
    }
    case 'PUT': {
      // 和 POST 相同的，都是通过请求体获取数据
      break;
    }
    case 'DELETE': {
      // ..
      break;
    }
    default: {
      // ..
    }
  }
});

// 关于这个 router 的写法，之后再去研究下《深入浅出 node.js》
const router = {
  'GET': {
    '/': () => console.log('get now')
  },
  'POST': {
    '/': (req, res) => console.log('post now')
  }
}

const handleGetMehtod = (req, res) => {
  // 获取 url
  const url = req.url.indexOf('?') !== -1 ? req.url.split('?') : req.url;
  const realUrl = Array.isArray(url) ? url[0] : url;
  // 解析查询字符串
  const querystring = Array.isArray(url) ? url[1] : '';
  req.query = parseQuerystring(querystring);
  console.log(req.query);
  // 根据 url 和 method 分发给对应的 controller
  router['GET'][realUrl](req, res);
}

// 解析查询字符串
function parseQuerystring (querystring) {
  // 分隔 &
  let queryPair = querystring.split('&');
  // 分隔 =
  let query = {}
  queryPair.forEach(pair => {
    let items = pair.split('=');
    query[items[0]] = decodeURIComponent(items[1]);
  })
  return query;
}

const handlePostMethod = async (req, res) => {
  // 获取请求体内容 body
  let result = await new Promise((resolve, reject) => {
    let data = ''
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      resolve(data);
    });
    req.on('error', (err) => {
      reject(err);
    });
  })
  // 判断请求类型
  let type = req.headers['content-type'];
  switch (type) {
    case 'application/x-www-form-urlencoded': {
      res.query = parseQuerystring(result);
      break;
    }
    case 'application/form-data': {
      // 这个好麻烦啊... 要按照那个格式写解析，先不写咯？
      break;
    }
    case 'application/json': {
      res.query = JSON.parse(result);
      break;
    }
    default: {
      // ..
    }
  }
  // 根据 url 和 method 分发给对应的 controller
  router['POST'][req.url](req, res);
}

server.listen(7777, () => {
  console.log('port 7777 is listening');
})