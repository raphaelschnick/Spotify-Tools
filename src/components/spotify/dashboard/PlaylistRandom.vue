<template>
  <div>
    {{ user.display_name }}
    <br>
    Random Playlist erstellen:
  </div>
</template>

<script>
export default {
  name: 'PlaylistRandom',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
