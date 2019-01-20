function getComponent () {
  var btn = document.createElement('button')
  btn.innerText = 'click'
  btn.onclick = function () {
    import(/* webpackChunkName: "print" */  './2.js').then(module => {
      console.log(module)
    })
  }

  document.getElementsByTagName('body')[0].appendChild(btn)
}


getComponent()
