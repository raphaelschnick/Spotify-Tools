import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '@/router/index'
import store from './store/store'
import App from './App.vue'
import './plugins/bootstrap-vue'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  return next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
