import axios from '@/utils/myaxios.js'

export const getcatelist = () => {
  return axios({
    url: '/category'
  })
}
