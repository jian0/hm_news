import axios from '@/utils/myaxios.js'

// 获取文章列表
export const getarticlelist = (params) => {
  return axios({
    url: '/post',
    params
  })
}

// 获取评论列表
export const getarticledetail = (id) => {
  return axios({
    url: `/post/${id}`
  })
}

// 点赞
export const postlike = (id) => {
  return axios({
    url: `/post_like/${id}`
  })
}

// 收藏
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

// 发布评论
export const sendContent = (id, data) => {
  return axios({
    method: 'post',
    url: `/post_comment/${id}`,
    data
  })
}
