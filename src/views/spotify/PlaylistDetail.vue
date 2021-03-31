<template>
  <Nav>
    <spotify-playlist-detail
      v-if="playlist"
      :playlist="playlist"
    />
  </Nav>
</template>

<script>
import Vue from 'vue'
import SpotifyPlaylistDetail from '@/components/spotify/playlist/Detail'
import Nav from '@/components/Nav'

export default {
  name: 'SpotifyPlaylistDetailVue',
  components: { SpotifyPlaylistDetail, Nav },
  data () {
    return {
      playlist: null
    }
  },
  created () {
    if (!this.$store.getters.getToken) {
      this.$router.push({ name: 'SpotifyLogin' })
    } else {
      Vue.axios.get('https://api.spotify.com/v1/playlists/' + this.$route.params.id, {
        headers: {
          Authorization: 'Bearer ' + this.$store.getters.getToken
        }
      }).then(response => {
        this.playlist = response.data
      })
    }
  }
}
</script>
