// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7oVJuSfJiQplaoN43_pTz87pvSd5Wm7w",
  authDomain: "expense-tracker-5a3ef.firebaseapp.com",
  projectId: "expense-tracker-5a3ef",
  storageBucket: "expense-tracker-5a3ef.appspot.com",
  messagingSenderId: "942600361111",
  appId: "1:942600361111:web:c78275d947f2b3930c05d2"
};

//firebase login
//firebase init
//firebase deploy

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = new getFirestore(app);