<template>
  <div class="spotify">
    <spotify-dashboard />
  </div>
</template>

<script>
import SpotifyDashboard from '@/components/spotify/dashboard/Dashboard'

export default {
  name: 'Spotify',
  components: {
    SpotifyDashboard
  },
  created () {
    if (!this.$store.getters.getToken) {
      this.$router.push({ name: 'SpotifyLogin' })
    }
  }
}
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .profile_pic {
    width: 100px;
  }
</style>
