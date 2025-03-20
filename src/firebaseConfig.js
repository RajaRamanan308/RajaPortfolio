// firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxJnFPFHDurLeTDWQdI4YtEbAsCUOTJMs",
  authDomain: "rajaportfolio-49742.firebaseapp.com",
  projectId: "rajaportfolio-49742",
  storageBucket: "rajaportfolio-49742.firebasestorage.app",
  messagingSenderId: "128005953785",
  appId: "1:128005953785:web:1f3d7ba61388bfd965aa28"
};

const fireBaseApp = initializeApp(firebaseConfig);

export {fireBaseApp};
