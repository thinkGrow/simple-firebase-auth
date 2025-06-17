// do not share firebase config online

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCutdo9QwUtURxP8h2CjF3rAFSS_m3Tv-4",
  authDomain: "simple-firebase-auth-f37a9.firebaseapp.com",
  projectId: "simple-firebase-auth-f37a9",
  storageBucket: "simple-firebase-auth-f37a9.firebasestorage.app",
  messagingSenderId: "1040751007396",
  appId: "1:1040751007396:web:b8fa8efcfb0deb2ee2b831",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebas Auth and get a ref to the service
export const auth = getAuth(app);

