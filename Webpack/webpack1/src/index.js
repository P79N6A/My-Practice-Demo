import './1.css'
// import './1.less'
var o = import('./other.js')



function component () {
  const aaa = 111
  const m = () => '33333'
  var div = document.createElement('div')
  div.innerHTML = '假如...' + aaa + m()


  return div
}

document.body.appendChild(component())

if (module.hot) {
  module.hot.accept('./other.js', function(){
      console.log("Accepting the updated printMe module!");
      // printMe();
  })
}