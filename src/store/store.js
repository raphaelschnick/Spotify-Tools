import Home from '../views/Home'
import Spotify from '../views/Spotify'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    mutateUser (state, payload) {
      state.user = payload
    }
  },
  getters: {
    getUser (state) {
      return state.user
    }
  },
  modules: {
    Home,
    Spotify
  }
})
