<template>
  <div class="home">
    <b-container>
      <spotify-auth />
    </b-container>
  </div>
</template>

<script>
import SpotifyAuth from '@/components/spotify/Auth.vue'

export default {
  name: 'Home',
  components: {
    SpotifyAuth
  }
}
</script>
