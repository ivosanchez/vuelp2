<template>
  <v-container class="about section">
    <v-layout row wrap align-center>
      <v-flex xs12 sm6 px-3>
        <div class="about-thumb text-xs-center mb-4">
          <v-img
            src="https://images.unsplash.com/photo-1556559322-b5071efadc88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
            aspect-ratio="1"
          ></v-img>
        </div>
      </v-flex>
      <v-flex xs-12 sm6 px-3>
        <div class="section-head">
          <h2 class="section-title">About</h2>
          <div
            class="section-meta"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptatibus iure, voluptates, saepe quos dolorum!</div>
        </div>

        <div
          class="section-body"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquam, impedit. Blanditiis ab explicabo quidem saepe animi veniam, impedit ex sunt id quia vel totam?</div>
        <v-btn round color="blue" dark class="mt-4 mx-0" to="/about">read more</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomeAbout"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  position: relative;
  overflow: hidden;
}
</style>
