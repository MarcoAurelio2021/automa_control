// js/firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

/*
  Substitua abaixo se quiser (use as credenciais do seu Firebase Console).
  Atenção: apiKey e outras chaves do front-end são públicas por design.
*/
const firebaseConfig = {
  apiKey: "AIzaSyANcIFNrkyhoOTruy63RDWlpImRkxjxoig",
  authDomain: "automa-control.firebaseapp.com",
  projectId: "automa-control",
  storageBucket: "automa-control.appspot.com",
  messagingSenderId: "231257032219",
  appId: "1:231257032219:web:6f8911d710ea1b7e645abe",
  measurementId: "G-5BLF85ESER"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// providers
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider("apple.com"); // exige configuração Apple + Firebase

export { app, auth, db, googleProvider, appleProvider, serverTimestamp };
