import axios from '@/utils/myaxios.js'

// 获取栏目列表
export const getcatelist = () => {
  return axios({
    url: '/category'
  })
}
