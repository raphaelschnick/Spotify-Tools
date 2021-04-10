<template>
  <div>
    <spotify-user-card :user="user" />
    <b-nav
      class="mb-2"
      tabs
      fill
    >
      <b-nav-item
        style="color: black;"
        :active="active == 1"
        @click="active = 1"
      >
        Playlists
      </b-nav-item>
      <b-nav-item
        :active="active == 2"
        @click="active = 2"
      >
        Künstler*innen
      </b-nav-item>
      <b-nav-item
        :active="active == 3"
        @click="active = 3"
      >
        Alben
      </b-nav-item>
    </b-nav>
    <div v-if="active == 1">
      <vs-card-group>
        <spotify-playlist-card
          v-for="playlist in playlists"
          :key="playlist.id"
          :playlist="playlist"
        />
      </vs-card-group>
    </div>
    <div v-if="active == 2">
      <vs-card-group>
        <spotify-artist-card
          v-for="artist in artists"
          :key="artist.id"
          :artist="artist"
        />
      </vs-card-group>
    </div>
    <b-row v-if="active == 3">
      <b-col
        v-for="album in albums"
        :key="album.name"
        class="col-lg-2 col-6"
      >
        <b-card-group class="mb-2">
          <spotify-album-card
            :album="album"
          />
        </b-card-group>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import axios from 'axios'
import SpotifyUserCard from '@/components/spotify/user/Card'
import SpotifyArtistCard from '@/components/spotify/artist/Card'
import SpotifyPlaylistCard from '@/components/spotify/playlist/Card'
import SpotifyAlbumCard from '@/components/spotify/album/Card'

export default {
  name: 'User',
  components: { SpotifyUserCard, SpotifyPlaylistCard, SpotifyArtistCard, SpotifyAlbumCard },
  props: {
    user: {
      type: Object,
      required: true
    },
    // eslint-disable-next-line vue/require-default-prop
    playlists: null
  },
  data () {
    return {
      active: 1,
      artists: null,
      albums: null
    }
  },
  created () {
    const client = axios.create({
      baseURL: 'https://api.spotify.com/v1/me',
      headers: {
        Authorization: 'Bearer ' + this.$store.getters.getToken
      }
    })
    client.get('/following?type=artist', {
    }).then(response => {
      this.artists = response.data.artists.items
    })
    client.get('/albums', {
    }).then(response => {
      console.log(response)
      this.albums = response.data.items
    })
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

<style scoped>
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
  color: #fff;
  background-color: #272727;
  border: 0;
  border-color: #272727;
}
.nav-tabs .nav-link {
  color: #fff;
  border: 0;
  transition-property: all;
  transition-duration: 0.35s;
}
.nav-tabs .nav-link:hover {
    transition: ease-in-out 0.35s;
    background-color: #272727;
}
</style>
