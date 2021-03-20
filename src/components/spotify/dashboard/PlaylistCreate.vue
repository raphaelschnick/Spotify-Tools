<template>
  <b-form @submit="onSubmit">
    <b-form-group
      label="Name"
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
    <b-form-group label="Beschreibung">
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
    <b-form-group label="Öffentlich">
      <b-form-checkbox
        v-model="playlist.public"
        switch
      >
        {{ checkbox }}
      </b-form-checkbox>
    </b-form-group>
    <b-button
      type="submit"
      variant="primary"
    >
      Playlist erstellen
    </b-button>
  </b-form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PlaylistCreate',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      playlist: {
        name: '',
        description: '',
        public: false
      }
    }
  },
  computed: {
    checkbox () {
      return this.playlist.public ? 'Öffentlich' : 'Privat'
    }
  },
  methods: {
    onSubmit () {
      event.preventDefault()
      const client = axios.create({
        baseURL: 'https://api.spotify.com/v1/me/',
        headers: {
          Authorization: 'Bearer ' + this.$store.getters.getToken
        }
      })
      client.post('/playlists', this.playlist).then(response => {
        if (response) {
          this.$router.push({ name: 'SpotifyPlaylistDetail', params: { id: response.data.id } })
        }
      })
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

<style scoped>
#counter {
  background-color: transparent;
  border-color: transparent;
}
</style>
