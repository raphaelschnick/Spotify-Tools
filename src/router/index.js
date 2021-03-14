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
    component: () => import('@/views/spotify/Spotify.vue'),
    meta: {
      title: 'Konto'
    }
  },
  {
    path: '/spotify/playlist/:id',
    name: 'SpotifyPlaylistDetailVue',
    component: () => import('@/views/spotify/PlaylistDetail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
