function ajax (url = '', method = 'GET', data = null, headers = {}) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.responseText)
      }
    }
    xhr.open(method.toUpperCase(), url)
    for (let header in headers) {
      xhr.setRequestHeader(header, headers[header])
    }
    xhr.send(data) 
  })
}