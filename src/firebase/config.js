import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOjBGsR8EMeiwSP-whL2eEWL6SQN2pw5s",
  authDomain: "book-list-with-firebase-54cbd.firebaseapp.com",
  projectId: "book-list-with-firebase-54cbd",
  storageBucket: "book-list-with-firebase-54cbd.appspot.com",
  messagingSenderId: "286369313961",
  appId: "1:286369313961:web:6b7c6b125d852194e365b8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
