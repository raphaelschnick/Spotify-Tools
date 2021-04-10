<template>
  <vs-card
    type="3"
    class="mb-4"
  >
    <template #title>
      <h2>{{ user.display_name }}</h2>
    </template>
    <template #img>
      <img
        v-if="image"
        :src="user.images[0].url"
      >
      <img
        v-if="!image"
        src="@/assets/avatar.png"
      >
    </template>
    <template #text>
      <p> {{ user.email }} </p>
      <p>Follower: {{ user.followers.total }}</p>
      <p>Following: {{ following.length }}</p>
      <br>
      <vs-button
        :href="user.external_urls.spotify"
        target="_blank"
        primary
      >
        Zum Konto
      </vs-button>
    </template>
  </vs-card>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SpotifyUserCard',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      following: []
    }
  },
  computed: {
    image () {
      return this.user.images[0]
    }
  },
  created () {
    axios.get('https://api.spotify.com/v1/me/following?type=artist', {
      headers: {
        Authorization: 'Bearer ' + this.$store.getters.getToken
      }
    }).then(response => {
      if (response) {
        this.following = response.data.artists.items
      }
    })
  }
}
</script>

<style>
.card {
  transition-property: all;
  transition-duration: 0.35s;
}
.card:hover {
  box-shadow: 0 0 15px #1ED760;
  transition: ease-in-out 0.35s;
}
</style>
