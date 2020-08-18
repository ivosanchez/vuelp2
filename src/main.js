import Vue from "vue";
import App from "./App.vue";

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import router from "./router";
import store from "./store";
import "@/firebase/";

import "@fortawesome/fontawesome-free/css/all.css";
//import "./fortawesome";
Vue.use(Vuetify, {
  theme: {
    primary: "#4caf50"
  },
  iconfont: "fa"
});

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

if (window.Cypress) {
  window.app = app;
}
