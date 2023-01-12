// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJRaVZGZbUljR3uy3315v3odrZKEzY8zo",
  authDomain: "notapps-829ff.firebaseapp.com",
  projectId: "notapps-829ff",
  storageBucket: "notapps-829ff.appspot.com",
  messagingSenderId: "34688768749",
  appId: "1:34688768749:web:e2178c6600c7c1b4e44ae4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);