import { getAuth} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd0P1aw6U0K6g5OPoT5sD6fQIDFiSB-mU",
  authDomain: "coffee-shop-13f51.firebaseapp.com",
  projectId: "coffee-shop-13f51",
  storageBucket: "coffee-shop-13f51.firebasestorage.app",
  messagingSenderId: "688084489301",
  appId: "1:688084489301:web:895efde61255e2de4cf0dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);