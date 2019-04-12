import style from './1.css'

function Component () {
  let div = document.createElement('div')
  div.innerHTML = `<button class="${style.test}">123</button>`
  console.log(style)
  document.body.appendChild(div)
}

Component()