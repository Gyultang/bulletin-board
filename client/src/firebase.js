// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5FnsyZcl3pgtXNIKZRKIe-W7hCR4cRFA",
  authDomain: "react-community-be5da.firebaseapp.com",
  projectId: "react-community-be5da",
  storageBucket: "react-community-be5da.appspot.com",
  messagingSenderId: "84736267998",
  appId: "1:84736267998:web:5399e46fb98cc63450d44f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
