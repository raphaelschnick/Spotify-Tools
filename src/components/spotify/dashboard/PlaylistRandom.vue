<template>
  <b-form>
    <b-form-group
      label="Name:"
      valid-feedback="OK!"
      invalid-feedback="Namen eingeben!"
      :state="Boolean(playlist.name)"
    >
      <b-form-input
        v-model="playlist.name"
        required
        placeholder="Name"
        type="text"
        :state="Boolean(playlist.name)"
      />
    </b-form-group>
    <b-form-group label="Beschreibung:">
      <b-form-textarea
        id="description"
        v-model="playlist.description"
        valid-feedback="OK!"
        :state="playlist.description.length <= 300"
        maxlength="300"
        rows="3"
        placeholder="Beschreibung"
        type="text"
        @keyup="textCounter('description', 'counter', 300)"
      />
      <input
        id="counter"
        disabled
        maxlength="300"
        value="300"
      >
    </b-form-group>
    <b-form-group
      label="Playlist Base:"
      :state="Boolean(playlist.name)"
    >
      <b-form-select
        v-model="base"
        required
        :state="Boolean(base)"
      >
        <b-select-option
          disabled
          :value="null"
        >
          Auswählen
        </b-select-option>
        <b-form-select-option
          v-for="playlistItem in playlists"
          :key="playlistItem.id"
          :value="playlistItem.id"
        >
          {{ playlistItem.name }}
        </b-form-select-option>
      </b-form-select>
    </b-form-group>
    <b-form-group
      label="Max Tracks:"
    >
      <b-form-input
        v-model="maxTracks"
        required
        placeholder="Maximale Tracks"
        type="number"
        :state="Boolean(maxTracks)"
      />
    </b-form-group>
    <b-form-group label="Öffentlich">
      <b-form-checkbox
        v-model="playlist.public"
        switch
      >
        {{ checkbox }}
      </b-form-checkbox>
    </b-form-group>
    <b-progress
      v-if="progress"
      class="mb-2"
      :value="value"
      :max="100"
      show-progress
      animated
    />
    <b-button
      v-if="!done"
      type="submit"
      variant="primary"
      @click="onSubmit()"
    >
      Playlist erstellen
    </b-button>
    <b-button
      v-if="done"
      type="submit"
      variant="primary"
      :to="{ name: 'SpotifyPlaylistDetail', params: {id: newPlaylist.id} } "
    >
      Playlist anzeigen
    </b-button>
  </b-form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PlaylistRandom',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      playlists: [],
      newPlaylist: null,
      playlist: {
        name: '',
        description: '',
        public: false
      },
      base: null,
      maxTracks: 20,
      random: [],
      progress: false,
      value: 0,
      done: false
    }
  },
  computed: {
    checkbox () {
      return this.playlist.public ? 'Öffentlich' : 'Privat'
    }
  },
  created () {
    axios.get('https://api.spotify.com/v1/me/playlists', {
      headers: {
        Authorization: 'Bearer ' + this.$store.getters.getToken
      }
    }).then((response) => {
      response.data.items.forEach((item) => {
        if (item.owner.id === this.user.id) {
          this.playlists.push(item)
        }
      })
    })
  },
  methods: {
    onSubmit () {
      event.preventDefault()
      this.progress = true
      const client = axios.create({
        baseURL: 'https://api.spotify.com/v1/',
        headers: {
          Authorization: 'Bearer ' + this.$store.getters.getToken
        }
      })
      client.get('playlists/' + this.base).then((response) => {
        if (response) {
          this.value = 10
          client.post('me/playlists', this.playlist).then(responsePlaylist => {
            if (responsePlaylist) {
              this.newPlaylist = responsePlaylist.data
              this.value = 30
              client.get('playlists/' + this.base + '/tracks?limit=100').then(responseTracks => {
                if (responseTracks) {
                  this.value = 40
                  let i
                  const uris = []
                  for (i = 0; i < 20; i++) {
                    const random = this.generateUniqueRandom(99)
                    const track = responseTracks.data.items[random]
                    uris.push(track.track.uri)
                  }
                  uris.forEach(item => {
                    client.post('playlists/' + responsePlaylist.data.id + '/tracks?uris=' + item).then(addedTracks => {
                      this.value = 90
                      this.value = 100
                      this.done = true
                    })
                  })
                }
              })
            }
          })
        }
      })
    },
    generateUniqueRandom (maxNr) {
      let random = (Math.random() * maxNr).toFixed()

      random = Number(random)

      if (!this.random.includes(random)) {
        this.random.push(random)
        return random
      } else {
        if (this.random.length < maxNr) {
          return this.generateUniqueRandom(maxNr)
        }
      }
    },
    textCounter (textareaId, counterId, maxlimit) {
      const counter = document.getElementById(counterId)
      const textarea = document.getElementById(textareaId)
      if (textarea.value.length > maxlimit) {
        textarea.value = textarea.value.substring(0, maxlimit)
        return false
      } else {
        counter.value = maxlimit - textarea.value.length
      }
    }
  }
}
</script>

<style>
#counter {
  background-color: transparent;
  border-color: transparent;
}
</style>
