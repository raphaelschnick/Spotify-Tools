<template>
  <b-row class="mb-4">
    <b-col>
      <img
        :src="image"

        width="300"
        class="img-fluid"
      >
    </b-col>
    <b-col>
      <h2>
        {{ user.display_name }}
      </h2>
      <p> {{ user.email }} </p>
      <p>Follower: {{ user.followers.total }}</p>
      <p>Following: {{ following.length }}</p>

      <b-button
        :href="user.external_urls.spotify"
        target="_blank"
        variant="primary"
      >
        Zum Konto
      </b-button>
    </b-col>
  </b-row>
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
      return this.user.images[0] ? this.user.images[0].url : 'https://image.flaticon.com/icons/png/512/17/17004.png'
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
