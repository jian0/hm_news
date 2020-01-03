import Vue from 'vue'
import VueRouter from 'vue-router'

import Iogin from '@/views/login.vue'
Vue.use(VueRouter)
let router = new VueRouter({
  routes: [
    {
      name: 'Iogin',
      path: '/login',
      component: Iogin
    }
  ]
})

export default router
