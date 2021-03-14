<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: { Header }
}
</script>

<style lang="scss">
  // Import custom SASS variable overrides, or alternatively
  // define your variable overrides here instead
  @import 'assets/scss/custom-vars.scss';

  // Import Bootstrap and BootstrapVue source SCSS files
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';
</style>
