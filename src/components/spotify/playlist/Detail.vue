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
    <spotify-song-table
      v-if="tracks.length != 0"
      :tracks="tracks"
    />
  </div>
</template>

<script>
import axios from 'axios'
import SpotifySongTable from '@/components/spotify/song/Table'

export default {
  nane: 'SpotifyPlaylistDetail',
  components: { SpotifySongTable },
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
