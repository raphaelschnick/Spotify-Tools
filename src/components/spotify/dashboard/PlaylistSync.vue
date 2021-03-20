<template>
  <div>
    {{ user.display_name }}
    <br>
    YouTube Playlist Sync:
  </div>
</template>

<script>
export default {
  name: 'PlaylistSync',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
