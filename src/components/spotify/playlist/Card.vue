<template>
  <b-card
    :title="playlist.name"
    :img-src="image"
    img-alt="Image"
    img-top
    tag="article"
    bg-variant="secondary"
    text-variant="white"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{ playlist.owner.display_name }}
    </b-card-text>
    <b-card-text>
      Tracks: {{ playlist.tracks.total }}
    </b-card-text>
    <b-button
      :to="{ name: 'SpotifyPlaylistDetail', params: { id: playlist.id } }"
      variant="primary"
    >
      Zur Playlist
    </b-button>
  </b-card>
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
      return this.playlist.images[0] ? this.playlist.images[0].url : ''
    }
  }
}
</script>
