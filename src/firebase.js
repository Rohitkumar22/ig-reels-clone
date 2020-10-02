// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD-qUWMtaW6BsUf7G6MzNw2WK4aUIOAGMM",
    authDomain: "ig-reels-clone-99a5a.firebaseapp.com",
    databaseURL: "https://ig-reels-clone-99a5a.firebaseio.com",
    projectId: "ig-reels-clone-99a5a",
    storageBucket: "ig-reels-clone-99a5a.appspot.com",
    messagingSenderId: "944969488457",
    appId: "1:944969488457:web:27c0d92896f1b3089f8798",
    measurementId: "G-6Y7Q0RGFVH"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
export default db;