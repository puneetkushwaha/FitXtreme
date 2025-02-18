// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (replace with your actual Firebase config)
const firebaseConfig = {
    apiKey: "AIzaSyAd83lrUj7DXrf9YAV7yrG3VQA89WqXOSg",
    authDomain: "fitxtreme-2d087.firebaseapp.com",
    projectId: "fitxtreme-2d087",
    storageBucket: "fitxtreme-2d087.firebasestorage.app",
    messagingSenderId: "574367000677",
    appId: "1:574367000677:web:7098248b85b7c4f571be8c",
    measurementId: "G-NRQNYWD88V"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export { db };
  