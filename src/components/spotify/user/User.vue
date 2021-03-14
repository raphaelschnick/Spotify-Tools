<template>
  <div>
    <b-row v-if="user">
      <b-col>
        <spotify-user-card :user="user" />
      </b-col>
    </b-row>
    <b-row v-if="playlists">
      <b-col
        v-for="playlist in playlists"
        :key="playlist.id"
        class="col-lg-3 col-sm-6"
      >
        <b-card-group class="mb-3">
          <spotify-playlist-card
            :playlist="playlist"
          />
        </b-card-group>
      </b-col>
    </b-row>
    <button
      class="btn btn-primary"
      @click="logOut()"
    >
      Log out
    </button>
    <SpotifyLogin v-if="!user" />
  </div>
</template>
<script>
import SpotifyUserCard from '@/components/spotify/user/Card'
import SpotifyPlaylistCard from '@/components/spotify/playlist/Card'
import SpotifyLogin from '@/components/spotify/Login'

export default {
  name: 'User',
  components: { SpotifyLogin, SpotifyUserCard, SpotifyPlaylistCard },
  props: {
    user: {
      type: Object,
      required: true
    },
    // eslint-disable-next-line vue/require-default-prop
    playlists: null
  },
  methods: {
    logOut () {
      this.$store.commit('mutateToken', null)
      this.$store.commit('mutateUser', null)
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
