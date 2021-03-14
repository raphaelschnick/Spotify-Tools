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
    path: '/spotify/login',
    name: 'SpotifyLogin',
    component: () => import('@/views/spotify/Login')
  },
  {
    path: '/spotify/dashboard',
    name: 'Spotify',
    component: () => import('@/views/spotify/Spotify.vue'),
    meta: {
      title: 'Konto'
    }
  },
  {
    path: '/spotify/playlist/:id',
    name: 'SpotifyPlaylistDetail',
    component: () => import('@/views/spotify/PlaylistDetail.vue')
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('@/views/spotify/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
