import _ from 'lodash'
// import print from './print'

function component () {
  var element = document.createElement('div')
  
  var btn = document.createElement('button')
  btn.value = '点击'
  btn.onclick = function () {
    // print()
  }
  element.appendChild(btn)

  element.innerHTML = _.join(['hello', 'webpack'])

  console.log('随便加点东东测试一下 hash')
  return element
}

document.body.appendChild(component())