<template>
  <div
    class="mt-2"
  >
    <vs-sidebar
      v-model="active"
      background="dark"
      text-primary
      absolute
      hover-expand
      reduce
      open
    >
      <vs-sidebar-item id="home">
        <template #icon>
          <i class="fa fa-home" />
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="create">
        <template #icon>
          <i class="far fa-plus-square" />
        </template>
        Playlist erstellen
      </vs-sidebar-item>
      <vs-sidebar-item id="random">
        <template #icon>
          <i class="fas fa-random" />
        </template>
        Random Playlist
      </vs-sidebar-item>
      <vs-sidebar-item id="yt-sync">
        <template #icon>
          <i class="fab fa-youtube" />
        </template>
        YouTube Sync
      </vs-sidebar-item>
      <vs-sidebar-item id="settings">
        <template #icon>
          <i class="fas fa-cogs" />
        </template>
        Einstellungen
      </vs-sidebar-item>
      <vs-sidebar-item id="logout">
        <template #icon>
          <i
            class="fas fa-sign-out-alt"
            @click="logOut()"
          />
        </template>
        <a @click="logOut()">Abmelden</a>
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar class="pointer">
            <img
              src="@/assets/avatar.png"
              alt=""
            >
          </vs-avatar>

          <vs-avatar
            class="pointer"
            badge-color="danger"
            badge-position="top-right"
          >
            <i class="far fa-bell" />

            <template #badge>
              28
            </template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
    <div class="content">
      <user
        v-if="active === 'home'"
        :user="user"
        :playlists="playlists"
      />
      <playlist-create
        v-if="active === 'create'"
        :user="user"
      />
      <playlist-random
        v-if="active === 'random'"
        :user="user"
      />
      <playlist-sync
        v-if="active === 'yt-sync'"
        :user="user"
      />
      <spotify-settings
        v-if="active === 'settings'"
        :user="user"
      />
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
  name: 'Nav',
  components: { User, PlaylistCreate, PlaylistSync, PlaylistRandom, SpotifySettings },
  data () {
    return {
      active: 'home',
      activeSidebar: false,
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

<style>
.content {
  margin-left: 4rem;
}
.pointer {
  cursor: pointer;
}
.vs-sidebar__item__text, .vs-sidebar__item__icon {
  color: white !important;
}
</style>
