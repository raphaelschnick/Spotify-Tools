<template>
  <div class="spotify">
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from '@/components/spotify/Sidebar'

export default {
  name: 'Spotify',
  components: {
    Sidebar
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
