<template>
  <vs-card>
    <template #title>
      <h2>{{ playlist.name }}</h2>
    </template>
    <template #img>
      <img :src="image">
    </template>
    <template #text>
      <p>Tracks: {{ playlist.tracks.total }}</p>
      <vs-button
        :to="{ name: 'SpotifyPlaylistDetail', params: { id: playlist.id } }"
        primary
      >
        Zur Playlist
      </vs-button>
    </template>
    <template #interactions>
      <vs-button
        dark
        icon
      >
        <i class="far fa-star" />
      </vs-button>
    </template>
  </vs-card>
</template>

<script>
export default {
  name: 'SpotifyPlaylistCard',
  props: {
    playlist: {
      type: Object,
      required: true
    }
  },
  computed: {
    image () {
      return this.playlist.images[0] ? this.playlist.images[0].url : 'https://www.appgefahren.de/wp-content/cache/wp-appbox/ccc3a843fd9454e36dd1a98b6bc0c28e/ai-9932bc8a6fba8eb1a2a517d7fb7000c8'
    }
  }
}
</script>

<style scoped>
.vs-card {
  background: black !important;
}
</style>
