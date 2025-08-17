// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDFrxTYmBiCXdMr_-9nj2Qtezx_IOH7uDk",
  authDomain: "site-portfolio-1ca4e.firebaseapp.com",
  projectId: "site-portfolio-1ca4e",
  storageBucket: "site-portfolio-1ca4e.appspot.com",
  messagingSenderId: "1042961788224",
  appId: "1:1042961788224:web:b93650e7077ea799501ea5"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Экспорт Firestore
export const db = getFirestore(app);