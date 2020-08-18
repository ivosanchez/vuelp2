<template>
  <span>
    <v-container>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <DashboardMenu/>

          <DashboardContent/>
        </v-flex>
      </v-layout>
    </v-container>
  </span>
</template>
<script>
import DashboardContent from "./DashboardContent";
import DashboardMenu from "./DashboardMenu";

export default {
  name: "DashboardLayout",
  components: {
    DashboardContent,
    DashboardMenu
  }
};
</script>
