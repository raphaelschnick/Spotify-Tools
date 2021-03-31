<template>
  <b-card
    bg-variant="secondary"
    text-variant="white"
    style="max-width: 20rem; min-height: 16rem;"
    class="mb-2"
  >
    <b-avatar
      size="8rem"
      :src="image"
    />
    <br><br>
    <b-card-title class="text-center">
      <h5> {{ artist.name }} </h5>
    </b-card-title>
  </b-card>
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
