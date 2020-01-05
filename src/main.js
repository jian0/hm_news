import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Toast, Uploader, Field } from 'vant'

Vue.use(Toast)
  .use(Uploader)
  .use(Field)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
