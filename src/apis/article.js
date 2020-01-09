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
