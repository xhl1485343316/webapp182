import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/nutui.css'
NutUI.install(Vue);

// 引入common.css
import './assets/css/common.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
