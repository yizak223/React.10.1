// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt3e-uv3BsMfWLmeq6DTkMqiugOr4EQ5s",
  authDomain: "finance-web-299e2.firebaseapp.com",
  projectId: "finance-web-299e2",
  storageBucket: "finance-web-299e2.appspot.com",
  messagingSenderId: "430774331957",
  appId: "1:430774331957:web:34b93b2f58e6bc7fcbdf7c",
  measurementId: "G-C7T0VW15PK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dB = getFirestore(app);
 const auth = getAuth(app)

export { dB, auth };