<template>
  <v-app id="app">
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import "@/assets/sass/style.scss";
export default {
  name: "App"
};
</script>



<style lang="scss">
#app {
  background: #fff;
}
</style>
