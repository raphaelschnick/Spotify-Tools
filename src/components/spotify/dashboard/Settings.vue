<template>
  <div>
    {{ user.display_name }}
    <br>
    Einstellungen:
  </div>
</template>

<script>
export default {
  name: 'SpotifySettings',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
