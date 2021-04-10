import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '@/router/index'
import store from './store/store'
import App from './App.vue'
import './plugins/bootstrap-vue'
import jquery from 'jquery'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
window.$ = window.jQuery = jquery

Vue.use(VueAxios, axios)

Vue.use(Vuesax, {
  colors: {
    primary: '#1DB954',
    success: 'rgb(23, 201, 100)',
    danger: 'rgb(242, 19, 93)',
    warning: 'rgb(255, 130, 0)',
    dark: '#272727'
  }
})

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  return next()
})

export const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
