<template>
  <div class="spotify">
    <Nav :active="1" />
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
