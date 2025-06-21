// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHNImInGtczbooWMvw2lWY2BJ63MD1cV0",
  authDomain: "netflixgpt-49dc7.firebaseapp.com",
  projectId: "netflixgpt-49dc7",
  storageBucket: "netflixgpt-49dc7.firebasestorage.app",
  messagingSenderId: "1047217329475",
  appId: "1:1047217329475:web:bbe4337cf8688fc1cb0bf6",
  measurementId: "G-KG8JK3MC6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();