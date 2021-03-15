<template>
  <table
    v-if="tracks"
    class="table mt-5"
  >
    <thead>
      <tr>
        <th scope="col" />
        <th scope="col" />
        <th scope="col">
          Titel
        </th>
        <th scope="col">
          Künstler*in
        </th>
        <th
          scope="col"
        >
          Album
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="track in tracks"
        :key="track.id"
      >
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
          {{ track.artists[0].name }}
        </td>
        <td class="brief">
          <p>
            {{ track.album.name }}
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'SpotifySongTable',
  props: {
    tracks: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      current: {},
      index: 0,
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
