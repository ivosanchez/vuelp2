<template>
  <default-layout>
    <v-container class="text-xs-center">
      <h1>About Page</h1>

      <div class="about-thumb text-xs-center mb-4">
        <v-img
          src="https://images.unsplash.com/photo-1556559322-b5071efadc88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
          aspect-ratio="1"
        ></v-img>
      </div>

      <div
          class="section-body"
        >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquam, impedit. Blanditiis ab explicabo quidem saepe animi veniam, impedit ex sunt id quia vel totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia facere omnis provident impedit possimus officiis. Pariatur nisi, odit fuga voluptate?
        </p>

      </div>
    </v-container>
  </default-layout>
</template>
<script>
import DefaultLayout from "../layouts/DefaultLayout";

export default {
  name: "About",
  components: {
    DefaultLayout
  }
};
</script>

