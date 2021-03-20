<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import 'assets/scss/custom-vars.scss';
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';

body {
  background: linear-gradient(
    -45deg,
    #8a8bbc,
    #799ac7,
    #9a5f91
  );
  animation: gradient 30s ease infinite;
  background-repeat: no-repeat;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
