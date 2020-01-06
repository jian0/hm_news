import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Toast, Uploader, Field, Dialog, Picker } from 'vant'

Vue.use(Toast)
  .use(Uploader)
  .use(Field)
  .use(Dialog)
  .use(Picker)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
