<template>
  <b-card
    :title="album.name"
    :img-src="image"
    img-alt="Image"
    img-top
    tag="article"
    bg-variant="secondary"
    text-variant="white"
    style="max-width: 12rem; min-height: 22rem;"
    class="mb-2"
  >
    <b-card-text>
      Tracks: {{ album.total_tracks }}
    </b-card-text>
    <b-button
      :to="{ name: 'SpotifyAlbumDetail', params: { id: album.id } }"
      variant="primary"
    >
      Zum Album
    </b-button>
  </b-card>
</template>

<script>
export default {
  name: 'SpotifyAlbumCard',
  props: {
    album: {
      type: Object,
      required: true
    }
  },
  computed: {
    image () {
      return this.album.images[0] ? this.album.images[0].url : 'https://www.appgefahren.de/wp-content/cache/wp-appbox/ccc3a843fd9454e36dd1a98b6bc0c28e/ai-9932bc8a6fba8eb1a2a517d7fb7000c8'
    }
  }
}
</script>
