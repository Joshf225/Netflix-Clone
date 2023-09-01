// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCKB-GTmWaeszTovmD7hlZq6QXBT7aqgLw",
  authDomain: "react-netflix-clone-ce28b.firebaseapp.com",
  projectId: "react-netflix-clone-ce28b",
  storageBucket: "react-netflix-clone-ce28b.appspot.com",
  messagingSenderId: "232354597561",
  appId: "1:232354597561:web:de631a9199462518866968",
  measurementId: "G-14YKLS3747",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
