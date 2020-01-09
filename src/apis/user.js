
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

export const edituserinfo = (id, data) => {
  return axios({
    method: 'post',
    url: `/user_update/${id}`,
    data
  })
}

export const register = (data) => {
  return axios({
    method: 'post',
    url: '/register',
    data
  })
}

// 关注用户
export const followsuser = (id) => {
  return axios({
    url: `/user_follows/${id}`
  })
}

// 取消关注用户
export const unfollowsuser = (id) => {
  return axios({
    url: `/user_unfollow/${id}`
  })
}

// 用户关注列表
export const userFollow = () => {
  return axios({
    url: '/user_follows'
  })
}
