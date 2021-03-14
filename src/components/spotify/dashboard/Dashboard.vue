<template>
  <div
    v-if="user"
    class="container-fluid display-table"
  >
    <div class="row display-table-row">
      <div
        id="navigation"
        class="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box"
      >
        <div class="logo">
          <router-link
            style="font-size: 4rem;"
            :to="{ name: 'Home' }"
            class="fab fa-spotify"
          />
        </div>
        <div class="navi">
          <ul>
            <li :class="{ 'active': active === 1 }">
              <a @click="active = 1"><i
                class="fa fa-home"
                aria-hidden="true"
              /><span class="hidden-xs hidden-sm">Home</span></a>
            </li>
            <li :class="{ 'active': active === 2 }">
              <a @click="active = 2"><i
                class="far fa-plus-square"
                aria-hidden="true"
              /><span class="hidden-xs hidden-sm">Playlist erstellen</span></a>
            </li>
            <li :class="{ 'active': active === 3 }">
              <a @click="active = 3"><i
                class="fas fa-random"
                aria-hidden="true"
              /><span class="hidden-xs hidden-sm">Random Playlist</span></a>
            </li>
            <li :class="{ 'active': active === 4 }">
              <a @click="active = 4"><i
                class="fab fa-youtube"
                aria-hidden="true"
              /><span class="hidden-xs hidden-sm">YouTube Playlist Sync</span></a>
            </li>
            <li :class="{ 'active': active === 5 }">
              <a @click="active = 5"><i
                class="fas fa-cogs"
                aria-hidden="true"
              /><span class="hidden-xs hidden-sm">Einstellungen</span></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-10 col-sm-11 display-table-cell v-align">
        <user
          v-if="active === 1"
          :user="user"
          :playlists="playlists"
        />
        <playlist-create
          v-if="active === 2"
          :user="user"
        />
        <playlist-random
          v-if="active === 3"
          :user="user"
        />
        <playlist-sync
          v-if="active === 4"
          :user="user"
        />
        <spotify-settings
          v-if="active === 5"
          :user="user"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import User from '@/components/spotify/user/User'
import PlaylistCreate from '@/components/spotify/dashboard/PlaylistCreate.vue'
import PlaylistSync from '@/components/spotify/dashboard/PlaylistSync.vue'
import PlaylistRandom from '@/components/spotify/dashboard/PlaylistRandom.vue'
import SpotifySettings from '@/components/spotify/dashboard/Settings'

export default {
  name: 'SpotifyDashboard',
  components: { User, PlaylistCreate, PlaylistSync, PlaylistRandom, SpotifySettings },
  data () {
    return {
      active: 1,
      playlists: []
    }
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    }
  },
  created () {
    Vue.axios.get('https://api.spotify.com/v1/me/playlists', {
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
  }
}
</script>
<style>
a:focus,a:hover,a{
    outline:none;
    text-decoration: none;
}
li,ul{
    list-style: none;
    padding: 0;
    margin: 0;
}

#navigation {
    background: #0A0B0A;
    padding-bottom: 9rem;
    padding-left: 0;
}

.search input {
    border: none;
    font-size: 15px;
    padding: 15px 9px;
    width: 100%;
    color: #8492af;
}

.logo {
    text-align: center;
}

.navi a {
    border-bottom: 1px solid #0A0B0A;
    border-top: 1px solid #0A0B0A;
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
    color: #39EF0B;
}

.navi .active a {
    background: #0A0B0A;
    border-left: 5px solid #39EF0B;
    padding-left: 15px;
}

.navi a:hover {
    background: #122143 none repeat scroll 0 0;
    border-left: 5px solid #39EF0B;
    display: block;
    padding-left: 15px;
}
</style>
