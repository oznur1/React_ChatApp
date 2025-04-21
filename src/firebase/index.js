// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
 
//database import
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD_M-V9bC-px7I0BivNUrC0Lg9srlIUVnw",
  authDomain: "hi-chat-1c1c9.firebaseapp.com",
  projectId: "hi-chat-1c1c9",
  storageBucket: "hi-chat-1c1c9.firebasestorage.app",
  messagingSenderId: "369046383669",
  appId: "1:369046383669:web:83f048d4627fb9f9fed57c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//google saglayıcısını kur
export const provider=new GoogleAuthProvider();

//auth hizmetini kur
export const auth=getAuth(app);

//database hizmetinin referansın al
export const db=getFirestore(app);