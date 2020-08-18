<template>
  <default-layout>
    <HomeIntro/>
    <HomeAbout/>
    <HomeService/>
  </default-layout>
</template>
<script>
import DefaultLayout from "../layouts/DefaultLayout";

import HomeIntro from "../components/HomeIntro";
import HomeAbout from "../components/HomeAbout";
import HomeService from "../components/HomeService";

export default {
  name: "home",
  components: {
    DefaultLayout,
    HomeIntro,
    HomeAbout,
    HomeService
  }
};
</script>
<style>
.bg-light {
  background: #FCFBFF;
}

.section {
  padding-top: 50px;
  padding-bottom: 50px;
}
.section-head {
  margin: 0 0 30px;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 15px;
}

.section-meta {
  font-size: 1rem;
  line-height: 25px;
  font-weight: 300;
  color: #777;
}

.section-body {
  font-weight: 300;
}
</style>


