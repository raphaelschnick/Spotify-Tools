<template>
  <div>
    <BootstrapSideBar
      :sidenav-config="sidenavConfig"
      :header="header"
      :has-navbar="hasNavbar"
      :links="sidelinks"
      :navs="headerLinks"
    >
      <spotify-playlist-detail
        v-if="playlist"
        :playlist="playlist"
      />
    </BootstrapSideBar>
  </div>
</template>

<script>
import Vue from 'vue'
import SpotifyPlaylistDetail from '@/components/spotify/playlist/Detail'
import BootstrapSideBar from 'b-sidebar'

export default {
  name: 'SpotifyPlaylistDetailVue',
  components: { SpotifyPlaylistDetail, BootstrapSideBar },
  data () {
    return {
      playlist: null
    }
  },
  created () {
    if (!this.$store.getters.getToken) {
      this.$router.push({ name: 'SpotifyLogin' })
    } else {
      Vue.axios.get('https://api.spotify.com/v1/playlists/' + this.$route.params.id, {
        headers: {
          Authorization: 'Bearer ' + this.$store.getters.getToken
        }
      }).then(response => {
        this.playlist = response.data
      })
    }
  }
}
</script>

<style>
a:focus,a:hover,a{
    outline:none;
    text-decoration: none;
}
li,ul{
  cursor: pointer;
    list-style: none;
    padding: 0;
    margin: 0;
}

#navigation {
  min-height: 45.1rem;
  min-width: 15rem;
  background-color: #272727;
  border-radius: 0px 20px 20px 0px;
  padding-bottom: 9rem;
  padding-left: 0;
}

.logo {
    text-align: center;
}

.navi a {
    color: #ffffff;
    display: block;
    font-size: 17px;
    font-weight: 500;
    padding: 28px 20px;
    text-decoration: none;
}

.navi a span {
  color: white;
}

.navi i {
    margin-right: 15px;
    color: #1ED760;
}

.navi .active a {
    background: #272727;
    border-left: 5px solid #1ED760;
    padding-left: 15px;
}

.navi a:hover {
    background: #122143 none repeat scroll 0 0;
    border-left: 5px solid #1ED760;
    display: block;
    padding-left: 15px;
}
</style>
