// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiurkOAU9CTdTPyv40-7fCAILFSK0JOZA",
  authDomain: "fir-auth-email-pass-react.firebaseapp.com",
  projectId: "fir-auth-email-pass-react",
  storageBucket: "fir-auth-email-pass-react.appspot.com",
  messagingSenderId: "132186366027",
  appId: "1:132186366027:web:1758dbfd5a5a45f448edce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;
