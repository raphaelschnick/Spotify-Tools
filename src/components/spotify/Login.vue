<template>
  <b-container
    class="pt-5"
    style="margin-bottom: 100%"
  >
    <b-row>
      <b-col class="spotify">
        <b-card
          bg-variant="secondary"
          class="mt-5 text-center"
        >
          <i
            style="font-size: 15rem; color: #1ED760;"
            class="fab fa-spotify"
          />
          <br><br>
          <b-button variant="primary">
            <a href="http://localhost:3000/login">Login</a>
          </b-button>
        </b-card>
      </b-col>
      <b-col class="youtube">
        <b-card
          bg-variant="secondary"
          class="mt-5 text-center"
        >
          <i
            style="font-size: 15rem; color: #FF0000"
            class="fab fa-youtube"
          />
          <br><br>
          <b-button variant="danger">
            <a href="http://localhost:3000/login">Login</a>
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'SpotifyLogin'
}
</script>

<style scoped>
a, a:hover {
  color: black;
  text-decoration: none;
}
.card {
  border-radius: 20px
}
.youtube .card {
  transition-property: all;
  transition-duration: 0.35s;
}
.youtube .card:hover {
  box-shadow: 0 0 15px #FF0000;
  transition: ease-in-out 0.35s;
}
</style>
