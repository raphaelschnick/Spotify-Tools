import spotifyClient from './spotifyClient'
import { app } from '@/main'

const END_POINT = '/me'

const spotifyService = {
  async get () {
    try {
      const RAW_DATA = await spotifyClient.get(`${END_POINT}` + '/')
      return RAW_DATA.data
    } catch (e) {
      this.errorHandling(e)
      return null
    }
  },
  async addPlaylist (playlist) {
    try {
      const RAW_DATA = await spotifyClient.post(`${END_POINT}` + '/playlists', playlist)
      return RAW_DATA.data
    } catch (e) {
      this.errorHandling(e)
      return null
    }
  },
  errorHandling (e) {
    app.$bvToast.toast(e.message, {
      title: 'Error',
      variant: 'danger',
      noAutoHide: true
    })
    console.error(e)
  }
}

export default spotifyService
