
import axios from '@/utils/myaxios.js'

// 登录请求
export const login = (data) => {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}

// 获取用户信息
export const getUserById = (id) => {
  return axios({
    url: `/user/${id}`
    // headers: { 'Authorization': localStorage.getItem('hm_news_token') }
  })
}
