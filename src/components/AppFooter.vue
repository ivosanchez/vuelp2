<template>
  <v-footer class="pa-3" height="auto" color="green darken-2">
    <v-spacer></v-spacer>
    <v-flex text-xs-center white--text xs12>
      &copy; {{ new Date().getFullYear() }} —
      <v-btn flat small color="white" to="/404" class="pa-0 ma-0">Primary</v-btn>
    </v-flex>
    <v-flex text-xs-center white--text xs12>
      &copy; {{ new Date().getFullYear() }} —
      <v-btn flat small color="white" to="/404" class="pa-0 ma-0">Primary</v-btn>
    </v-flex>
  </v-footer>
</template>
<script>
export default {
  name: "AppFooter"
};
</script>

