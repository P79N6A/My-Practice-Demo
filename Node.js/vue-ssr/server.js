const http = require('http')
const Vue = require('vue')
const path = require('path')
// const renderer = require('vue-server-renderer').createRenderer({
//   template: require('fs').readFileSync('./index.template.html', 'utf-8')
// })
// const resolve = (fileanme) => path.join(__dirname, fileanme)
const { createBundleRenderer } = require('vue-server-renderer')
const renderer = createBundleRenderer(path.join(__dirname, './dist/vue-ssr-server-bundle.json'), {
  runInNewContext: false
  // template: path.join(__dirname, 'view/src/index.template.html')
})

http.createServer((request, response) => {
  // const app = new Vue({
  //   template: `<div>hello</div>`
  // })
  const context = {
    url: request.url
  }
  renderer.renderToString(context).then(html => {
    response.writeHead(200)
    response.end(`${html}`)
  }).catch(err => {
    console.log(err)
  })
}).listen(8888, function () {
  console.log('port 8888 is listening')
})