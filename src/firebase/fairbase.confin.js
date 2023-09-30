// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ3KBFnYdI7DOGC7n5qQ4c5b6nSXzuQVM",
  authDomain: "first-password-email-router.firebaseapp.com",
  projectId: "first-password-email-router",
  storageBucket: "first-password-email-router.appspot.com",
  messagingSenderId: "94359417023",
  appId: "1:94359417023:web:c0596b19334569f0d5d60a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//
const auth = getAuth(app);

export default auth;
