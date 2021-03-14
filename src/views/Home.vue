<template>
  <div class="home">
    <SpotifyLogin />
  </div>
</template>

<script>
import SpotifyLogin from '@/components/spotify/Login'

export default {
  name: 'Home',
  components: { SpotifyLogin }
}
</script>
