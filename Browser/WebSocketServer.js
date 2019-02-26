// 引入 WebSocket 模块
const WebSocket = require('ws')
// 引入 Server 类
const WebSocketServer = WebSocket.Server
// 实例化
const wss = new WebSocketServer({
  port: 7777
})

// 监听所有的 WebSocket 连接请求
wss.on('connection', function (ws) {
  // 监听每个特定的 WebSocket
  ws.on('message', function (message) {
    console.log(message)

    // 给客户端发消息
    ws.send(`我收到你的消息啦：${message}`, (err) => {
      // 错误处理
      if (err) {
        console.log(err)
      }
    })
  })

  // setInterval(() => {
  //   ws.send('你是人间四月天')
  // }, 1500)
})