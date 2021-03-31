
<template>
  <div>
    <b-carousel
      v-model="slide"
      controls
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="playlist in playlists"
        :key="playlist.id"
        :img-src="playlist.images[0] ? playlist.images[0].url : 'https://picsum.photos/1024/480/?image=22'"
      >
        <h4> {{ playlist.name }} </h4>
        <h5> Tracks: {{ playlist.tracks.total }} </h5>
        <b-button
          :to="{ name: 'SpotifyPlaylistDetail', params: { id: playlist.id } }"
          variant="primary"
        >
          Zur Playlist
        </b-button>
      </b-carousel-slide>
    </b-carousel>
    <br><br>
  </div>
</template>

<script>
export default {
  name: 'SpotifyPlaylistSlide',
  props: {
    playlists: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style>
.carousel-caption {
  border-radius: 20px;
  background-color: #272727;
  color: white;
}
.carousel {
    height: 500px;
    width: 500px !important;
}
</style>
