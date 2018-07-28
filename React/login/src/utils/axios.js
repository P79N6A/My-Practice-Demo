/**
 * _axios({
 *   url: ''
 *   method: 'POST' || 默认为 POST 可以自行配置
 *   data: {
 *   },  // 所传数据 get post 的都可以
 *   conTentType: {} // 请求头。 默认配置。可以自行配置   {defaultContentType , ...contentType}
 * })
 */
const axios = require('axios')

// 配置默认值
const instance = axios.create({
  baseURL: 'http://localhost:1314', // 后台的请求地址
  method: 'POST',
  withCredentials: true, // 是否跨域
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}, // 不用 json 的话，是因为有 prefight 请求
  responseType: 'json'
})

let _axios = (options) => {
  // 如果是 get 请求
  if (options.method.toLowerCase() === 'get' && options.data) {
    options.params = options.data
  }
  let resultPromise = instance({
    ...options
  })
  return resultPromise
  // let resuiltPromise = axios({
  //   method: 'POST',
  //   ...options,
  //   url: baseUrl + options.url
  // })
  // return resuiltPromise
}

export default _axios