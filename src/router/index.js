import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/spotify',
    name: 'Spotify',
    component: () => import(/* webpackChunkName: "imprint" */ '../views/Spotify.vue'),
    meta: {
      title: 'Konto'
    }
  }

]

const router = new VueRouter({
  routes
})

export default router
