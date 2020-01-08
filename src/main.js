import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Toast, Uploader, Field, Dialog, Picker, Icon, Tab, Tabs, List, PullRefresh } from 'vant'

Vue.use(Toast)
  .use(Uploader)
  .use(Field)
  .use(Dialog)
  .use(Picker)
  .use(Icon)
  .use(Tab)
  .use(Tabs)
  .use(List)
  .use(PullRefresh)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
