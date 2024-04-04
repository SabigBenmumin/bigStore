import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuROPK26VzM9o-vwaFhn34cLux7-vFwJQ",
  authDomain: "learnmvc-9f0a2.firebaseapp.com",
  projectId: "learnmvc-9f0a2",
  storageBucket: "learnmvc-9f0a2.appspot.com",
  messagingSenderId: "502933752540",
  appId: "1:502933752540:web:082901bdf50d303bda0219",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
