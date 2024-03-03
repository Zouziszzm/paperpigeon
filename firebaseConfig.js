// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfscr8P5ZheCqvtFUYKvQyKg0yfi7ChaQ",
  authDomain: "paper-pigeons.firebaseapp.com",
  projectId: "paper-pigeons",
  storageBucket: "paper-pigeons.appspot.com",
  messagingSenderId: "9202220274",
  appId: "1:9202220274:web:4e34c99ffb1d41013b246b",
  measurementId: "G-KWXR16CJF3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

