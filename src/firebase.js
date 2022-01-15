// import firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmzPxzeVnNLX5RP_fmwKp9FN1m8pdmcyk",
  authDomain: "twitter-challenge-8be74.firebaseapp.com",
  projectId: "twitter-challenge-8be74",
  storageBucket: "twitter-challenge-8be74.appspot.com",
  messagingSenderId: "681347721774",
  appId: "1:681347721774:web:2420e2fcc23fa96de2cdbf",
  measurementId: "G-LN6HQ7CP6C",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;