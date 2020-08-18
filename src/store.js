import Vue from "vue";
import Vuex from "vuex";
//import axios from "axios";
import { firebase, locationsCollection } from "@/firebase";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appTitle: "Landing Page",
    user: null,
    isAuthenticated: false,
    locations: []
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setLocations(state, payload) {
      state.locations = payload;
    },
    setUserLocations(state, payload) {
      state.userLocations = payload;
    }
  },
  actions: {
    userRegistration({ commit }, { email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          router.push("/signin");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    userLogin({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          router.push("/dashboard");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    userLoginGoogle({ commit }) {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          console.log(result);
          commit("setUser", result.user);
          commit("setIsAuthenticated", true);
          router.push("/dashboard");
        })
        .catch(err => {
          console.log(err.message);
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    userSignOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    async getLocations({ state, commit }) {
      locationsCollection
        .get()
        .then(querySnapshot => {
          let locationsArray = [];

          querySnapshot.forEach(doc => {
            let location = doc.data();
            location.id = doc.id;
            locationsArray.push(location);
          });

          commit("setLocations", locationsArray);
        })
        .catch(() => {
          commit("setLocations", []);
        });
    },
    addLocation({ state }, payload) {
      firebase
        .database()
        .ref()
        .child("/locations")
        .push(payload);

      //console.log(payload);
    },
    getUserLocations({ state, commit }) {
      return firebase
        .database()
        .ref("/locations")
        .once("value", snapshot => {
          commit("setUserLocations", snapshot.val());
        });
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    }
  }
});
