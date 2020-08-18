<template>
  <v-container class="product section">
    <v-layout row wrap>
      <v-flex xs6 px-3 mb-4 v-for="(location, idx) in paginatedItems" :key="idx">
        <v-card>
          <v-responsive>
            <v-img :src="location.image"></v-img>
          </v-responsive>

          <v-card-title primary-title class="px-1">
            <div>
              <h3 class="mb-4">{{location.name}}</h3>
              <p>{{location.createdAt.toDate() | moment }}</p>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="success" @click="orderLocation(location.name)">Add to board</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout justify-center>
      <v-flex xs8>
        <v-pagination @input="onPageChanged" v-model="currentPage" :length="totalRows" circle></v-pagination>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import moment from "moment";

export default {
  name: "ProductCard",
  data() {
    return {
      currentPage: 1,
      perPage: 2,
      paginatedItems: this.locations,
      totalRows: 3
    };
  },
  computed: {
    locations() {
      return this.$store.state.locations;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    showLocations() {
      this.$store.dispatch("getLocations");
    },
    orderLocation(item) {
      if (this.isAuthenticated) {
        this.$store.dispatch("addLocation", item);
      } else {
        this.$router.push("/signin");
      }
    },
    paginate(page_size, page_number) {
      let itemsToParse = this.locations;

      this.paginatedItems = itemsToParse.slice(
        page_number * page_size,
        (page_number + 1) * page_size
      );
    },
    onPageChanged(value) {
      this.paginate(this.perPage, value - 1);

      //console.log("change");
    }
  },
  mounted: function() {
    this.showLocations();

    this.paginate(this.perPage, 0);
  },
  filters: {
    moment: function(date) {
      return moment(date.createdAt).format("LL");
    }
  }
};
</script>
<style lang="scss" scoped>
.v-card {
  background: #fafafa;
  box-shadow: none;
  border-radius: 5px;
  padding: 10px 15px;

  h3 {
    font-size: 1rem;
    font-weight: bold;
  }
}

.v-responsive {
  border-radius: 5px;
}
.v-card__actions,
.v-card__title {
  display: block;
  padding: 0px;
}

.v-pagination {
  /deep/ i {
    font-size: 0.875rem;
  }
}
</style>

