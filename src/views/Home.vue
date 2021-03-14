<template>
  <div class="home">
    <b-container>
      <SpotifyLogin />
    </b-container>
  </div>
</template>

<script>
import SpotifyLogin from '@/components/spotify/Login'

export default {
  name: 'Home',
  components: { SpotifyLogin }
}
</script>
