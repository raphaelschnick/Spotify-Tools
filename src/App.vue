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
    #847ce8,
    #799ac7,
    #be77b4
  );
  background-repeat: repeat;
}
.form-control, .form-control:focus, .custom-switch .custom-control-label::before, .custom-select {
  color: white;
  background: #272727 !important;
}
.form-control::placeholder, .form-control, .custom-select {
  color: rgb(202, 196, 196);;
}
#counter {
  color: rgb(202, 196, 196);
  background-color: transparent;
  border-color: transparent;
}
</style>
