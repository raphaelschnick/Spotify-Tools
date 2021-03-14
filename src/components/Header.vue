<template>
  <b-navbar
    toggleable="lg"
    type="secondary"
    variant="secondary"
  >
    <b-navbar-brand :to="{ name: 'Home' }">
      Spotify Tools
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse
      id="nav-collapse"
      is-nav
    >
      <b-navbar-nav>
        <b-nav-item href="/">
          Link
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          />
          <b-button
            size="sm"
            class="my-2 my-sm-0"
            type="submit"
          >
            Search
          </b-button>
        </b-nav-form>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <i class="fas fa-user" />
          </template>
          <b-dropdown-item :to="{ name: 'Spotify' }">
            Profile
          </b-dropdown-item>
          <b-dropdown-item @click="logOut()">
            Sign Out
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logOut () {
      this.$store.commit('mutateUser', null)
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>

</style>
