import firebase from "firebase/app";
import "firebase/database";
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyA9qO_NXI1_-4C_07zlbpVrvkVcf-_jZ9Y",
    authDomain: "itapetingaon.firebaseapp.com",
    databaseURL: "https://itapetingaon.firebaseio.com",
    projectId: "itapetingaon",
    storageBucket: "itapetingaon.appspot.com",
    messagingSenderId: "957487507091"
  };
  firebase.initializeApp(config);

  export const database = firebase.database();