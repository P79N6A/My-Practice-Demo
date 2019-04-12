const http = require('http')
const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

http.createServer((request, response) => {
  const app = new Vue({
    template: `<div>hello</div>`
  })
  const context = {
    title: '<meta>333</meta>'
  }
  renderer.renderToString(app, context).then(html => {
    response.writeHead(200)
    response.end(`${html}`)
  }).catch(err => {
    console.log(err)
  })
}).listen(8888, function () {
  console.log('port 8888 is listening')
})