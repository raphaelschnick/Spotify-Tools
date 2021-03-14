<template>
  <div>
    <spotify-dashboard
      v-if="user"
      :user="user"
    />
    <SpotifyLogin />
  </div>
</template>

<script>
import Vue from 'vue'
import SpotifyLogin from '@/components/spotify/Login'

export default {
  name: 'SpotifyLoginVue',
  components: { SpotifyLogin },
  data () {
    return {
      user: null
    }
  },
  created () {
    if (this.$route.query) {
      Vue.axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: 'Bearer ' + this.$route.query.access_token
        }
      }).then(response => {
        this.$store.commit('mutateUser', response.data)
        this.$store.commit('mutateToken', this.$route.query.access_token)
        this.$router.push('dashboard')
      })
    }
  }

}
</script>
