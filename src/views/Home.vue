<template>
  <div class="home">
    <spotify-login />
  </div>
</template>

<script>
import SpotifyLogin from '@/components/spotify/Login'

export default {
  name: 'Home',
  components: { SpotifyLogin },
  created () {
    if (this.$store.getters.getToken) {
      this.$router.push({ name: 'Spotify' })
    }
  }
}
</script>
