// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNgTlIHK4OwkSCK4bsceo7vssI_OG8yRA",
  authDomain: "coinbile.firebaseapp.com",
  projectId: "coinbile",
  storageBucket: "coinbile.appspot.com",
  messagingSenderId: "110136938879",
  appId: "1:110136938879:web:8a2be61a6bbe67ac1dca4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
