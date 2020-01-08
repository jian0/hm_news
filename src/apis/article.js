import axios from '@/utils/myaxios.js'

export const getarticlelist = (params) => {
  return axios({
    url: '/post',
    params
  })
}
