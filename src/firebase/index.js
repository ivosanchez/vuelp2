import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDZe-tQKUL038W_75rWEpDM_Q9Wd8BHLwQ",
  authDomain: "objetivo-danza-6b6d2.firebaseapp.com",
  databaseURL: "https://objetivo-danza-6b6d2.firebaseio.com",
  projectId: "objetivo-danza-6b6d2",
  storageBucket: "objetivo-danza-6b6d2.appspot.com",
  messagingSenderId: "721229667919",
  appId: "1:721229667919:web:afc6db8936e9b1d247d43a",
  measurementId: "G-FT1GZDF4QP"
};

firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();

// firebase collections
const usersCollection = db.collection("users");
const locationsCollection = db.collection("locations");
const postsCollection = db.collection("posts");
const likesCollection = db.collection("likes");

export {
  firebase,
  db,
  usersCollection,
  locationsCollection,
  postsCollection,
  likesCollection
};
