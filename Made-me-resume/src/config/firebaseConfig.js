// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZqn3OuX3IcYVCqbCOU_0F6CULFPMB09E",
    authDomain: "made-me-resume.firebaseapp.com",
    projectId: "made-me-resume",
    storageBucket: "made-me-resume.appspot.com",
    messagingSenderId: "577081178777",
    appId: "1:577081178777:web:a28b1d888f10d640009608",
    measurementId: "G-3YWF72LQN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dB = getFirestore(app);
const auth = getAuth(app)

export { dB, auth };