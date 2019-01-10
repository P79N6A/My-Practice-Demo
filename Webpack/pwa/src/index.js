console.log(navigator)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    console.log('ha?')
    navigator.serviceWorker.register('./service-worker.js').then(registeration => {
      console.log('sw registered', registeration)
    })
  })
}

function component () {
  var element = document.createElement('div')

  element.innerHTML = 'haha'
  console.log(navigator)
  return element
}

document.body.appendChild(component())