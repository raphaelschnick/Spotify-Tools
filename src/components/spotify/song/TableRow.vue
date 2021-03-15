<template>
  <tr>
    <td>
      <i
        v-if="current !== track"
        id="play"
        class="fas fa-play"
        @click="play(track)"
      />
      <i
        v-if="current === track"
        id="pause"
        class="fas fa-pause"
        @click="pause()"
      />
    </td>
    <td>
      <b-img
        :src="track.album.images[0].url"
        fluid
        width="100"
      />
    </td>
    <td>
      {{ track.name }}
    </td>
    <td>
      <p
        v-for="artist in track.artists"
        :key="artist.id"
      >
        {{ artist.name }}
      </p>
    </td>
    <td class="brief">
      <p>
        {{ track.album.name }}
      </p>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'SpotifySongTableRow',
  props: {
    track: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      current: {},
      isPlaying: false,
      currentTime: null,
      player: new Audio()
    }
  },
  methods: {
    play (track) {
      this.current = track
      this.player.src = track.preview_url
      this.player.play()
      this.isPlaying = true
      this.player.addEventListener(
        'ended',
        function () {
          this.pause()
        }.bind(this)
      )
    },
    pause () {
      this.player.pause()
      this.isPlaying = false
      this.current = null
    }
  }
}
</script>

<style>
#play {
  font-size: 2rem;
  margin-top: 30%;
  margin-left: 40%;
}
#pause {
  font-size: 2rem;
  margin-top: 30%;
  margin-left: 40%;
}
</style>
