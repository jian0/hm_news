import axios from '@/utils/myaxios.js'

export const uploadfile = (data) => {
  return axios({
    method: 'post',
    url: '/upload',
    data
  })
}
