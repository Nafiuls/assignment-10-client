// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByoGOIEQ497321YPW32SNvBdnbZhS1Ugs",
  authDomain: "playvibe-3e88f.firebaseapp.com",
  projectId: "playvibe-3e88f",
  storageBucket: "playvibe-3e88f.firebasestorage.app",
  messagingSenderId: "1097317625780",
  appId: "1:1097317625780:web:0709552acc5ee2de94cce1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
