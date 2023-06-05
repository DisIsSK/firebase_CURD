import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWdRYczPfBYObKRXUxmyAZ2FrnMuDTofU",
  authDomain: "daily-to-do-f3c2f.firebaseapp.com",
  projectId: "daily-to-do-f3c2f",
  storageBucket: "daily-to-do-f3c2f.appspot.com",
  messagingSenderId: "380789732772",
  appId: "1:380789732772:web:7104fb8ac5284c98a8fd31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
