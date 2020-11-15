// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA2lxAI14e6A55JcYQeaNw_JKXZsCaCI9o",
    authDomain: "clone-7a363.firebaseapp.com",
    databaseURL: "https://clone-7a363.firebaseio.com",
    projectId: "clone-7a363",
    storageBucket: "clone-7a363.appspot.com",
    messagingSenderId: "108266781857",
    appId: "1:108266781857:web:68dad49e8c196412c804e0",
    measurementId: "G-GZ5G34C14V"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db, auth};