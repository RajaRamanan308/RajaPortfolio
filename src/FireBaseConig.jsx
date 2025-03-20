// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxJnFFPHDurLeTDWQdI4YtEbAsCU0TJMs",
  authDomain: "rajaportfolio-49742.firebaseapp.com",
  projectId: "rajaportfolio-49742",
  storageBucket: "rajaportfolio-49742.appspot.com",
  messagingSenderId: "128085953785",
  appId: "1:128085953785:web:1f3d7ba61388bfd965aa28",
  measurementId: "G-7S7WNVJ444"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
