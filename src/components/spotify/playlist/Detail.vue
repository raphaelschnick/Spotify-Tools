<template>
  <div>
    <b-row v-if="playlist">
      <b-col cols="2">
        <img
          :src="image"

          width="300"
          class="img-fluid"
        >
      </b-col>
      <b-col>
        <h2>
          {{ playlist.name }}
        </h2>
        <p>Von: {{ playlist.owner.display_name }}</p>
        <p>Follower: {{ playlist.followers.total }}</p>
        <p>{{ checkPublic }}</p>
        <b-button
          :href="playlist.external_urls.spotify"
          target="_blank"
          variant="primary"
        >
          In Spotify öffnen
        </b-button>
      </b-col>
    </b-row>
    <table
      v-if="tracks"
      class="table mt-5"
    >
      <thead>
        <tr>
          <th scope="col" />
          <th scope="col">
            Titel
          </th>
          <th scope="col">
            Künstler*in
          </th>
          <th
            scope="col"
            class="brief"
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
  </div>
</template>

<script>
import axios from 'axios'

export default {
  nane: 'SpotifyPlaylistDetail',
  props: {
    playlist: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      tracks: []
    }
  },
  computed: {
    image () {
      return this.playlist.images[0] ? this.playlist.images[0].url : 'https://image.flaticon.com/icons/png/512/17/17004.png'
    },
    checkPublic () {
      return this.playlist.public ? 'Öffentlich' : 'Privat'
    }
  },
  created () {
    axios.get('https://api.spotify.com/v1/playlists/' + this.playlist.id + '/tracks?limit=30', {
      headers: {
        Authorization: 'Bearer ' + this.$store.getters.getToken
      }
    }).then(response => {
      response.data.items.forEach(item => {
        if (!item.id && item.track.id) {
          axios.get('https://api.spotify.com/v1/tracks/' + item.track.id, {
            headers: {
              Authorization: 'Bearer ' + this.$store.getters.getToken
            }
          }).then(response => {
            this.tracks.push(response.data)
          })
        }
      })
    })
  }
}
</script>

<style>

</style>
