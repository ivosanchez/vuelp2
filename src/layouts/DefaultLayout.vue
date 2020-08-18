<template>
  <span>
    <AppNavigation/>
    <v-container class="pa-0 ma-0">
      <slot/>
    </v-container>
    <AppFooter/>
  </span>
</template>
<script>
import AppNavigation from "../components/AppNavigation";
import AppFooter from "../components/AppFooter";

export default {
  name: "DefaultLayout",
  components: {
    AppNavigation,
    AppFooter
  }
};
</script>

