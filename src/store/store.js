import Home from '../views/Home'
import Spotify from '../views/spotify/Spotify'
import SpotifyPlaylistDetail from '../views/spotify/PlaylistDetail'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token: null
  },
  mutations: {
    mutateUser (state, payload) {
      state.user = payload
    },
    mutateToken (state, payload) {
      state.token = payload
    }
  },
  getters: {
    getUser (state) {
      return state.user
    },
    getToken (state) {
      return state.token
    }
  },
  modules: {
    Home,
    Spotify,
    SpotifyPlaylistDetail
  }
})
