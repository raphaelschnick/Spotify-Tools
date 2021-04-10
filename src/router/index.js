import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Spotify Tools'
    }
  },
  {
    path: '/spotify/login',
    name: 'SpotifyLogin',
    component: () => import('@/views/spotify/Login'),
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/dashboard',
    name: 'Spotify',
    component: () => import('@/views/spotify/Spotify.vue'),
    meta: {
      title: 'Dashboard'
    }
  },
  {
    path: '/spotify/playlist/:id',
    name: 'SpotifyPlaylistDetail',
    component: () => import('@/views/spotify/PlaylistDetail.vue'),
    meta: {
      title: 'Playlist'
    }
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import('@/views/Impressum.vue'),
    meta: {
      title: 'Impressum'
    }
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('@/views/spotify/Login'),
    meta: {
      title: 'Login'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
