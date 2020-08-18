<template>
  <v-container class="service bg-light section text-xs-center">
    <div class="section-head">
      <h2 class="section-title">Service</h2>
      <div
        class="section-meta"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum exercitationem dignissimos animi similique, eveniet voluptates.</div>
    </div>

    <v-layout wrap justify-center>
      <v-flex xs12 sm4 px-3>
        <div class="service-item">
          <div class="service-ico">
            <v-icon large color="green">fas fa-palette</v-icon>
          </div>

          <h4 class="service-title">Design</h4>

          <div
            class="service-body"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum exercitationem dignissimos animi similique, eveniet voluptates.</div>
        </div>
      </v-flex>
      <v-flex xs12 sm4 px-3>
        <div class="service-item">
          <div class="service-ico">
            <v-icon large color="green">fas fa-code</v-icon>
          </div>

          <h4 class="service-title">Program</h4>

          <div
            class="service-body"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, consequuntur laboriosam sequi magni deleniti possimus earum libero veritatis odio numquam.</div>
        </div>
      </v-flex>
      <v-flex xs12 sm4 px-3>
        <div class="service-item">
          <div class="service-ico">
            <v-icon large color="green">fas fa-bullhorn</v-icon>
          </div>

          <h4 class="service-title">SEO</h4>

          <div
            class="service-body"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, architecto voluptas deleniti quisquam iusto odio temporibus autem.</div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomeService"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.service-item {
  background: #fff;
  padding: 20px 10px 20px;
  margin-bottom: 15px;
  box-shadow: -1px 12px 25px rgba(119, 119, 119, 0.2);
}

.service-ico {
  height: 70px;
  margin: 0 auto 20px;
  font-size: 4rem;
}

.service-title {
  font-size: 1.125rem;
  text-transform: uppercase;
  margin: 0 0 15px;
}

.service-body {
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 300;
  color: #777;
}
</style>
