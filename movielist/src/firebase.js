import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6BUGZziToT17agmOiBtRIEvRiYOzl1nU",
  authDomain: "movielist-a647a.firebaseapp.com",
  projectId: "movielist-a647a",
  storageBucket: "movielist-a647a.appspot.com",
  messagingSenderId: "753487883200",
  appId: "1:753487883200:web:315d579814f5be8bdfb625"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const providerGoogle = new GoogleAuthProvider()