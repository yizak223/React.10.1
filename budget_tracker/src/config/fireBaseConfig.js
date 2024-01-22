// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth , createUserWithEmailAndPassword} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHCi510_vjmpvYWLbVcMlz3Css3AUvXK0",
  authDomain: "budget-tracker-fcb7a.firebaseapp.com",
  projectId: "budget-tracker-fcb7a",
  storageBucket: "budget-tracker-fcb7a.appspot.com",
  messagingSenderId: "721271470950",
  appId: "1:721271470950:web:4ac03ad28e4ff03d8c26a7",
  measurementId: "G-VSCSMS4WN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dB = getFirestore(app);
 const auth = getAuth(app)

export { dB, auth };

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

