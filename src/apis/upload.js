import axios from '@/utils/myaxios.js'

// 上传文件
export const uploadfile = (data) => {
  return axios({
    method: 'post',
    url: '/upload',
    data
  })
}
