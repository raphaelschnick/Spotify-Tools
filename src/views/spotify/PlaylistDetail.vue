<template>
  <div>
    <spotify-playlist-detail
      v-if="this.$store.getters.getToken && playlist"
      :playlist="playlist"
    />
    <SpotifyLogin v-if="!this.$store.getters.getToken" />
  </div>
</template>

<script>
import Vue from 'vue'
import SpotifyLogin from '@/components/spotify/Login'
import SpotifyPlaylistDetail from '@/components/spotify/playlist/Detail'

export default {
  name: 'SpotifyPlaylistDetailVue',
  components: { SpotifyPlaylistDetail, SpotifyLogin },
  data () {
    return {
      playlist: null
    }
  },
  created () {
    Vue.axios.get('https://api.spotify.com/v1/playlists/' + this.$route.params.id, {
      headers: {
        Authorization: 'Bearer ' + this.$store.getters.getToken
      }
    }).then(response => {
      this.playlist = response.data
    })
  }
}
</script>
