// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdcKwAAohn3IBAtJGkks41rLDHEdy4d9U",
  authDomain: "test-52041.firebaseapp.com",
  projectId: "test-52041",
  storageBucket: "test-52041.firebasestorage.app",
  messagingSenderId: "118221665094",
  appId: "1:118221665094:web:a9d8ec75a309ab969f2b47",
  measurementId: "G-BCXM6VREKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);