const Vue = require('vue')
const app = new Vue({
  template: `<div>Hello World</div>`
})

const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

renderer.renderToString(app).then(html => {
  console.log(html)
}).catch(err => {
  console.error(err)
})