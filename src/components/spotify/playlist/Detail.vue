<template>
  <div>
    {{ playlist.name }}
  </div>
</template>

<script>
export default {
  nane: 'SpotifyPlaylistDetail',
  props: {
    playlist: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
