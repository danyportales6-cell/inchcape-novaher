import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAz4Ky88uprETuo-Fbeg6BnFOo-Gq4msTI",
  authDomain: "innovaher-inchcape.firebaseapp.com",
  projectId: "innovaher-inchcape",
  storageBucket: "innovaher-inchcape.firebasestorage.app",
  messagingSenderId: "794992699430",
  appId: "1:794992699430:web:bde7d50bcf448d6daf9ee7",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
