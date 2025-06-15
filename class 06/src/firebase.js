import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC2bcdUH6GCnkAQAIFxO2K7SNMHeynggB0",
  authDomain: "inno-batch12.firebaseapp.com",
  projectId: "inno-batch12",
  storageBucket: "inno-batch12.firebasestorage.app",
  messagingSenderId: "34981821971",
  appId: "1:34981821971:web:bc3ec8e701ed61d11849e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);



// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
    app,
    auth,
    db
}