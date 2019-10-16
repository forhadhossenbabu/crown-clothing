import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBUE7_OVRswO2rs1cBhiJfmExj1FsnfXlU",
  authDomain: "crown-clothing-db123.firebaseapp.com",
  databaseURL: "https://crown-clothing-db123.firebaseio.com",
  projectId: "crown-clothing-db123",
  storageBucket: "crown-clothing-db123.appspot.com",
  messagingSenderId: "536646456857",
  appId: "1:536646456857:web:d627072da85c177650fc88",
  measurementId: "G-LBKEWSPJ8P"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
