<template>
  <default-layout>
    <v-container class="text-xs-center">
      <h1>Product Page</h1>

      <ProductCard/>
    </v-container>
  </default-layout>
</template>
<script>
import DefaultLayout from "../layouts/DefaultLayout";
import ProductCard from "../components/ProductCard";

export default {
  name: "Product",
  components: {
    DefaultLayout,
    ProductCard
  }
};
</script>

