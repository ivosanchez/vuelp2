<template>
  <span>
    <v-toolbar app flat prominent>
      <v-toolbar-side-icon v-if="responsive" @click="sidebar = !sidebar">
        <v-icon>fas fa-bars</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title class="black--text">{{ dashboardTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn outline small icon color="primary" to="/dashboard">
          <v-icon small>fas fa-user</v-icon>
        </v-btn>
        <v-btn dark small icon color="primary" @click="logout">
          <v-icon small>fas fa-sign-out-alt</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      v-model="sidebar"
      app
      flat
      floating
      persistent
      mobile-break-point="520"
      width="220"
    >
      <v-list dense>
        <v-divider/>
        <v-list-tile v-for="item in sidebarItems" :key="item.title" :to="item.path">
          <v-list-tile-action>
            <v-icon small>fas fa-{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-footer absolute height="auto" color="primary">
      <v-layout justify-center row wrap>
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          color="white"
          flat
          round
          small
        >{{item.title}}</v-btn>
        <v-flex py-3 text-xs-center white--text xs12>&copy; {{ new Date().getFullYear() }}</v-flex>
      </v-layout>
    </v-footer>
  </span>
</template>
<script>
export default {
  name: "DashboardMenu",
  data() {
    return {
      dashboardTitle: "Dashboard",
      sidebar: true,
      responsive: false,
      menuItems: [
        { title: "Home", path: "/", icon: "home" },
        { title: "About", path: "/about", icon: "chevron-right" },
        { title: "Product", path: "/product", icon: "chevron-right" },
        { title: "Dashboard", path: "/dashboard", icon: "chevron-right" }
      ],
      sidebarItems: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: "th-large"
        },
        {
          title: "User Profile",
          path: "/dashboard/subpage",
          icon: "user"
        }
      ]
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  methods: {
    logout() {
      this.$store.dispatch("userSignOut");
    },
    onResponsiveInverted() {
      if (window.innerWidth < 520) {
        this.responsive = true;
        this.responsiveInput = false;
      } else {
        this.responsive = false;
        this.responsiveInput = true;
      }
    }
  }
};
</script>
<style>
.footer-link {
  text-decoration: none;
  display: inline-block;
}
</style>