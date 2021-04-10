<template>
  <div class="spotify">
    <Nav />
  </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  name: 'Spotify',
  components: {
    Nav
  },
  created () {
    if (!this.$store.getters.getToken) {
      this.$router.push({ name: 'SpotifyLogin' })
    }
  }
}
</script>
