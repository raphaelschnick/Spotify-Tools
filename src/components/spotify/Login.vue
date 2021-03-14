<template>
  <b-card
    class="mt-5 text-center"
  >
    <i
      style="font-size: 15rem;"
      class="fab fa-spotify"
    />
    <b-card-header>Login with Sotify</b-card-header>
    <b-button variant="primary">
      <a href="http://localhost:3000/login">Login</a>
    </b-button>
  </b-card>
</template>

<script>
export default {
  name: 'SpotifyLogin'
}
</script>

<style scoped>
a, a:hover {
  color: white;
  text-decoration: none;
}
</style>
