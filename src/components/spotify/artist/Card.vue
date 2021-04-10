<template>
  <vs-card success>
    <template #title>
      <h2>{{ artist.name }}</h2>
    </template>
    <template #img>
      <img :src="image">
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
  name: 'SpotifyArtistCard',
  props: {
    artist: {
      type: Object,
      required: true
    }
  },
  computed: {
    image () {
      return this.artist.images[0] ? this.artist.images[0].url : 'https://www.appgefahren.de/wp-content/cache/wp-appbox/ccc3a843fd9454e36dd1a98b6bc0c28e/ai-9932bc8a6fba8eb1a2a517d7fb7000c8'
    }
  }
}
</script>
