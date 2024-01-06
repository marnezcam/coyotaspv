// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBMJwx6BOAhXQT1yMgC5YP8TtoeRQqqy-Q",
  authDomain: "tenedores-v2-c6016.firebaseapp.com",
  projectId: "tenedores-v2-c6016",
  storageBucket: "tenedores-v2-c6016.appspot.com",
  messagingSenderId: "1025951148983",
  appId: "1:1025951148983:web:aea47fdcf6d6e4082c5632",
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
