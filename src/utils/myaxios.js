import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  let token = localStorage.getItem('hm_news_token')
  // 如果有token值，就把值设置给请求头
  if (token) {
    // console.log(config)
    config.headers.Authorization = token
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // console.log(response)
  if (response.data.message === '用户信息验证失败') {
    console.log(response.data.message)

    window.location.href = '#/login'
    this.$toast.fail(response.data.message)
  }
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default axios
