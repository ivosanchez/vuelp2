<template>
  <v-container class="text-xs-center">
    <h1>Dashboard Page</h1>

    <v-layout column>
      <h6 class="title my-4">Product</h6>

      <ul class="subheading mb-2 text-xs-left">
        <li v-for="(location, idx) in userLocations" :key="idx">{{location}}</li>
      </ul>
    </v-layout>
  </v-container>
</template>
<script>
import DashboardLayout from "../layouts/DashboardLayout";

export default {
  name: "DashboardPage",
  components: {
    DashboardLayout
  },
  computed: {
    userLocations() {
      return this.$store.state.userLocations;
    }
  },
  mounted() {
    this.getLocations();
  },
  methods: {
    getLocations() {
      this.$store.dispatch("getUserLocations");
    }
  }
};
</script>

