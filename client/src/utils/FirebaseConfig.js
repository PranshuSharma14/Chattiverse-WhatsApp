import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyD5_jE1tUL4VvtQssNAAzC39KrCsYxZYqQ",
  authDomain: "chattiverse-64c4b.firebaseapp.com",
  projectId: "chattiverse-64c4b",
  storageBucket: "chattiverse-64c4b.firebasestorage.app",
  messagingSenderId: "369262988950",
  appId: "1:369262988950:web:5c639e3c41f9feabdebcb7",
  measurementId: "G-ZD0NQ4LV3L"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)