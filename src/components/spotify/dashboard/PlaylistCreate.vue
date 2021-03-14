<template>
  <div>
    {{ user.display_name }}
    <br>
    Playlist erstellen:
  </div>
</template>

<script>
export default {
  name: 'PlaylistCreate',
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
