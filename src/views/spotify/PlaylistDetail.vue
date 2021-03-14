<template>
  <div v-if="playlist">
    <spotify-playlist-detail :playlist="playlist" />
  </div>
</template>

<script>
import Vue from 'vue'
import SpotifyPlaylistDetail from '@/components/spotify/playlist/Detail'

export default {
  name: 'SpotifyPlaylistDetailVue',
  components: { SpotifyPlaylistDetail },
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
