import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjgBe0iRdF0h7LoiC3KHrGM4SQuBH6K1g",
  authDomain: "clone-fff49.firebaseapp.com",
  projectId: "clone-fff49",
  storageBucket: "clone-fff49.appspot.com",
  messagingSenderId: "920316404583",
  appId: "1:920316404583:web:291e8b4d482ced289285c2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
