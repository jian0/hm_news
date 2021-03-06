import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login.vue'
import Usercenter from '@/views/usercenter.vue'
import Edituser from '@/views/edituser.vue'
import Register from '@/views/register.vue'
import Index from '@/views/index.vue'
import Artiledetail from '@/views/artiledetail.vue'
import Myfollow from '@/views/Myfollow.vue'
import Mystar from '@/views/mystar.vue'
import Postcomment from '@/views/comment.vue'
import Addnav from '@/views/addnav.vue'
import Search from '@/views/search.vue'

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
    },
    {
      name: 'Addnav',
      path: '/addnav',
      component: Addnav
    },
    {
      name: 'Search',
      path: '/search',
      component: Search
    },
    {
      name: 'Myfollow',
      path: '/myfollow',
      component: Myfollow
    },
    {
      name: 'Mystar',
      path: '/mystar',
      component: Mystar
    },
    {
      name: 'Postcomment',
      path: '/postcomment/:id',
      component: Postcomment
    },
    {
      name: 'Edituser',
      path: '/edituser/:id',
      component: Edituser
    },
    {
      name: 'Register',
      path: '/register',
      component: Register
    },
    {
      name: 'Index',
      path: '/',
      component: Index
    },
    {
      name: 'Artiledetail',
      path: '/artiledetail/:id',
      component: Artiledetail
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
      alert('用户信息验证失败，请先登录！')
      // console.log(this) //undefine
      // this.$toast.fail('用户信息验证失败')
    }
  } else {
    next()
  }
})
export default router
