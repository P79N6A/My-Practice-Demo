let config = {
  baseUrl: 'http://localhost:8765'
}

function ajax (url, method, data = null, headers = {}) {
  const xhr = new XMLHttpRequest()

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('请求成功')
    }
  }

  xhr.open(method.toUpperCase(), url)
  for (let key in headers) {
    xhr.setRequestHeader(key, headers[key])
  }
  xhr.send(data)
}

var submitBtn = document.getElementById('submit-btn')
submitBtn.onclick = function (e) {
  let form = document.getElementById('form')
  let formData = new FormData(form)
  if (formData.get('file').size === 0) {
    formData.delete('file')
  }
  ajax(`${config.baseUrl}/start`, 'POST', formData)
  // ajax(`${config.baseUrl}/start`, 'POST', JSON.stringify({ username: 1}), { 'Content-Type': 'application/json'})

}