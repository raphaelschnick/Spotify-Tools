<template>
  <div id="bootstrap-sidebar">
    <div class="wrapper">
      <nav
        id="sidebar"
        ref="sidebar"
        class="bg-secondary"
      >
        <div class="sidebar-header">
          <router-link
            class="logo"
            :to="{name: 'Home'}"
          >
            <i class="fab fa-spotify" />
          </router-link>
        </div>

        <div class="navi">
          <ul>
            <li :class="{ 'active': active === 1 }">
              <a @click="active = 1">
                <i
                  class="fa fa-home"
                  aria-hidden="true"
                />
                <span class="hidden-xs hidden-sm">Home</span>
              </a>
            </li>
            <li :class="{ 'active': active === 2 }">
              <a @click="active = 2">
                <i
                  class="far fa-plus-square"
                  aria-hidden="true"
                />
                <span class="hidden-xs hidden-sm">Playlist erstellen</span>
              </a>
            </li>
            <li :class="{ 'active': active === 3 }">
              <a @click="active = 3">
                <i
                  class="fas fa-random"
                  aria-hidden="true"
                />
                <span class="hidden-xs hidden-sm">Random Playlist</span>
              </a>
            </li>
            <li :class="{ 'active': active === 4 }">
              <a @click="active = 4">
                <i
                  class="fab fa-youtube"
                  aria-hidden="true"
                />
                <span class="hidden-xs hidden-sm">YouTube Playlist Sync</span>
              </a>
            </li>
            <li :class="{ 'active': active === 5 }">
              <a @click="active = 5">
                <i
                  class="fas fa-cogs"
                  aria-hidden="true"
                />
                <span class="hidden-xs hidden-sm">Einstellungen</span>
              </a>
            </li>
            <li @click="logOut()">
              <a>
                <i
                  class="fas fa-sign-out-alt"
                  aria-hidden="true"
                />
                <span class="hidden-xs hidden-sm">Log Out</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        id="content"
        style="width:100%"
      >
        <nav
          class="bg-secondary"
        >
          <button
            id="sidebarCollapse"
            ref="sidebaricon"
            type="button"
            class="navbar-btn"
            @click.prevent="toggleSidebar"
          >
            <span />
            <span />
            <span />
          </button>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div
            id="navbarSupportedContent"
            class="collapse navbar-collapse"
          >
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >lol</a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="ml-2">
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
  },
  methods: {
    toggleSidebar () {
      this.$refs.sidebar.classList.toggle('active')
      this.$refs.sidebaricon.classList.toggle('active')
    },
    logOut () {
      this.$store.commit('mutateToken', null)
      this.$store.commit('mutateUser', null)
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>
p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
}

.navbar {
    padding: 15px 10px;
    border: none;
    border-radius: 0;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
}

.line {
    width: 100%;
    height: 1px;
    margin: 40px 0;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
    perspective: 1500px;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);
    transform-origin: bottom left;
}

#sidebar.active {
    margin-left: -250px;
    transform: rotateY(100deg);
}

#sidebar .sidebar-header {
  text-align: center;
    padding: 9.5px;
}

#sidebar ul.components {
    padding: 5px 0;
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    font-size: 1.1em;
    display: block;
}

a[data-toggle="collapse"] {
    position: relative;
}

#sidebar .dropdown-toggle::after{
    transform: translateY(-50%) rotate(180deg);
}
#sidebar .dropdown-toggle.collapsed::after{
    transform: translateY(-50%);
}
#sidebar .dropdown-toggle::after {
    transition: all 0.3s;
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
}
/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */
#content {
    width: 100%;
    padding: 0px;
    min-height: 100vh;
    transition: all 0.3s;
}

#sidebarCollapse {
    width: 40px;
    height: 40px;
    background: transparent;
    cursor: pointer;
}

#sidebarCollapse span {
    width: 80%;
    height: 2px;
    margin: 0 auto;
    display: block;
    background: #555;
    transition: all 0.8s cubic-bezier(0.810, -0.330, 0.345, 1.375);
    transition-delay: 0.2s;
}

#sidebarCollapse span:first-of-type {
    transform: rotate(45deg) translate(2px, 2px);
}
#sidebarCollapse span:nth-of-type(2) {
    opacity: 0;
}
#sidebarCollapse span:last-of-type {
    transform: rotate(-45deg) translate(1px, -1px);
}
#sidebarCollapse.active span {
    transform: none;
    opacity: 1;
    margin: 5px auto;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */
@media (max-width: 768px) {
  #sidebar {
      margin-left: -250px;
      transform: rotateY(90deg);
  }
  #sidebar.active {
      margin-left: 0;
      transform: none;
  }
  #sidebarCollapse span:first-of-type,
  #sidebarCollapse span:nth-of-type(2),
  #sidebarCollapse span:last-of-type {
      transform: none;
      opacity: 1;
      margin: 5px auto;
  }
  #sidebarCollapse.active span {
      margin: 0 auto;
  }
  #sidebarCollapse.active span:first-of-type {
      transform: rotate(45deg) translate(2px, 2px);
  }
  #sidebarCollapse.active span:nth-of-type(2) {
      opacity: 0;
  }
  #sidebarCollapse.active span:last-of-type {
      transform: rotate(-45deg) translate(1px, -1px);
  }
}
.logo i {
  text-align: center;
  font-size: 4rem;
}
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
    background: #404041 none repeat scroll 0 0;
    border-left: 5px solid #1ED760;
    display: block;
    padding-left: 15px;
}
</style>
