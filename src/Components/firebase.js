import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-_CkrIHZz16eo-sASXh9b-V7tqOa39jY",
  authDomain: "twitter-clone-79549.firebaseapp.com",
  projectId: "twitter-clone-79549",
  storageBucket: "twitter-clone-79549.appspot.com",
  messagingSenderId: "782050756812",
  appId: "1:782050756812:web:54828b7b918c152ad7da69",
  measurementId: "G-RG5R51GM3J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
