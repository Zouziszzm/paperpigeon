import { getApp,getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAfscr8P5ZheCqvtFUYKvQyKg0yfi7ChaQ",
  authDomain: "paper-pigeons.firebaseapp.com",
  projectId: "paper-pigeons",
  storageBucket: "paper-pigeons.appspot.com",
  messagingSenderId: "9202220274",
  appId: "1:9202220274:web:4e34c99ffb1d41013b246b",
  measurementId: "G-KWXR16CJF3"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db= getFirestore(app);
const storage = getStorage(app);


export {db,storage};
