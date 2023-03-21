import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBQKBs0gPYEhK8WrMG_hoCQADYlUPEHtRI",
  authDomain: "musicjobs-99191.firebaseapp.com",
  projectId: "musicjobs-99191",
  storageBucket: "musicjobs-99191.appspot.com",
  messagingSenderId: "737387262953",
  appId: "1:737387262953:web:a9ba039d88285d4b4b5178",
  measurementId: "G-G2N40YRJ98",
});

export const db = getFirestore(firebaseConfig);

export const auth = getAuth();
auth.languageCode = 'en'
