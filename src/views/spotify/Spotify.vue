<template>
  <div class="spotify">
    <spotify-dashboard v-if="this.$store.getters.getToken" />
    <SpotifyLogin v-if="!this.$store.getters.getToken" />
  </div>
</template>

<script>
import SpotifyLogin from '@/components/spotify/Login'
import SpotifyDashboard from '@/components/spotify/dashboard/Dashboard'

export default {
  name: 'Spotify',
  components: {
    SpotifyDashboard,
    SpotifyLogin
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
