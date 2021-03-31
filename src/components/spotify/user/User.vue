<template>
  <b-row
    v-if="playlists"
    class="mr-1"
  >
    <b-col cols="12">
      <spotify-user-card :user="user" />
    </b-col>
    <b-col
      v-for="playlist in playlists"
      :key="playlist.id"
      class="col-lg-3 col-12"
    >
      <b-card-group class="mb-3">
        <spotify-playlist-card
          :playlist="playlist"
        />
      </b-card-group>
    </b-col>
  </b-row>
</template>
<script>
import SpotifyUserCard from '@/components/spotify/user/Card'
import SpotifyPlaylistCard from '@/components/spotify/playlist/Card'

export default {
  name: 'User',
  components: { SpotifyUserCard, SpotifyPlaylistCard },
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
