// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZGwBtxNHvGuJY3ye6WdBxgVw63qHZWYI",
  authDomain: "test-cursor-project.firebaseapp.com",
  projectId: "test-cursor-project",
  storageBucket: "test-cursor-project.firebasestorage.app",
  messagingSenderId: "751026165079",
  appId: "1:751026165079:web:39fcf4b047f4f562109a12",
  measurementId: "G-QL75Z8HX9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);