<template>
  <div class="spotify">
    <spotify-sidebar />
    <template v-if="user">
      <h1>Hi there, {{ user.display_name }}</h1>
      <p>Email address: <a> {{ user.email }} </a></p>
      <p>
        <a :href="user.external_urls.spotify">Link to your profile</a>
      </p>
      <p>Number of followers: {{ user.followers.total }}</p>
      <p>
        <button
          class="btn btn-primary"
          @click="logOut()"
        >
          Log out
        </button>
      </p>
    </template>
    <template v-if="!user">
      <SpotifyLogin />
    </template>
  </div>
</template>

<script>
import Vue from 'vue'
import SpotifyLogin from '@/components/spotify/Login'
import SpotifySidebar from '@/components/spotify/Sidebar'

export default {
  name: 'Spotify',
  components: {
    SpotifySidebar,
    SpotifyLogin
  },
  data () {
    return {
      email: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    }
  },
  created () {
    if (this.$route.query) {
      Vue.axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: 'Bearer ' + this.$route.query.access_token
        }
      }).then((response) => {
        this.$store.commit('mutateUser', response.data)
      })
    }
  },
  methods: {
    logOut () {
      this.$store.commit('mutateUser', null)
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .profile_pic {
    width: 100px;
  }
</style>
