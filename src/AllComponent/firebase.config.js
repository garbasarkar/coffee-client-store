// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6iP4qNaVifX_27pcXSsOOkJSEUT6hMB8",
  authDomain: "coffee-store-server-first.firebaseapp.com",
  projectId: "coffee-store-server-first",
  storageBucket: "coffee-store-server-first.appspot.com",
  messagingSenderId: "165799196498",
  appId: "1:165799196498:web:edfb0dd6890d11ef4dec8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
