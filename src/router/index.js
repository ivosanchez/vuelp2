import Vue from "vue";
import Router from "vue-router";

import store from "@/store.js";

import routes from "./routes";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!store.state.isAuthenticated) {
      next({
        path: "/signin"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default new Router({
  routes,
  linkExactActiveClass: "active"
});
