// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrQbL_hYQzPke2MKtmgRvhquVHRL0WKUY",
  authDomain: "fir-integration-d2be9.firebaseapp.com",
  projectId: "fir-integration-d2be9",
  storageBucket: "fir-integration-d2be9.appspot.com",
  messagingSenderId: "957923660064",
  appId: "1:957923660064:web:427c3ff57040a8ceb20745",
  measurementId: "G-LDE0VSKHKG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
