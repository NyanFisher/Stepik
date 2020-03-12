import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import normalize from 'normalize.css'
import style from '@/assets/css/style.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  normalize,
  style,
  render: h => h(App)
}).$mount('body')



