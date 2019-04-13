let loginBtn = document.getElementById('login-btn')
let registerBtn = document.getElementById('register-btn')

loginBtn.onclick = (e) => {
  let form = document.getElementById('form')
  let formData = new FormData(form)
  ajax('/login', 'POST', formData).then((result) => {
    result = JSON.parse(result)
    alert(result.message)
  }).catch(e => {
    console.log(e)
  })
}

registerBtn.onclick = (e) => {
  let form = document.getElementById('form')
  let formData = new FormData(form)
  ajax('/register', 'POST', formData).then((result) => {
    result = JSON.parse(result)
    alert(result.message)
  }).catch(e => {
    console.log(e)
  })
}