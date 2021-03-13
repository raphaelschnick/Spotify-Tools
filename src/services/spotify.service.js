import httpClient from './httpClient'
import { app } from '@/main'

const END_POINT = '/spotify'

const spotifyService = {
  async getList () {
    try {
      const RAW_DATA = await httpClient.get(`${END_POINT}`)
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
