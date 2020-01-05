import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login.vue'
import Usercenter from '@/views/usercenter.vue'
Vue.use(VueRouter)
let router = new VueRouter({
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Usercenter',
      path: '/usercenter/:id',
      component: Usercenter
    }
  ]
})

// 添加  导航守卫
router.beforeEach((to, from, next) => {
  // 如果是这个路径开头的,就进来
  if (to.path.indexOf('/usercenter') === 0) {
    // 获取token值
    let token = localStorage.getItem('hm_news_token')
    // 如果有token,就跳转到用户中心页面
    if (token) {
      next()
    } else {
      // 否则返回到登录页面
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})
export default router
