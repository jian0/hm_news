import axios from '@/utils/myaxios.js'

export const getarticlelist = (params) => {
  return axios({
    url: '/post',
    params
  })
}

export const getarticledetail = (id) => {
  return axios({
    url: `/post/${id}`
  })
}

export const postlike = (id) => {
  return axios({
    url: `/post_like/${id}`
  })
}

export const starArticle = (id) => {
  return axios({
    url: `/post_star/${id}`
  })
}

// 获取评论列表
export const getCommentList = (id) => {
  return axios({
    url: `/post_comment/${id}`
  })
}
