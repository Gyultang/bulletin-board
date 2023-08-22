// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PTOJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
// .env 생성 후 복붙 필요
// .env는 client폴더에 생성 (package.json의 위치와 동일하게)
// # firebase key
// REACT_APP_FIREBASE_API_KEY="AIzaSyA5FnsyZcl3pgtXNIKZRKIe-W7hCR4cRFA"
// REACT_APP_FIREBASE_AUTH_DOMAIN="react-community-be5da.firebaseapp.com"
// REACT_APP_FIREBASE_PTOJECT_ID="react-community-be5da"
// REACT_APP_FIREBASE_STORAGE_BUCKET="react-community-be5da.appspot.com"
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID="84736267998"
// REACT_APP_FIREBASE_APP_ID="1:84736267998:web:5399e46fb98cc63450d44f"

// # npm i dotenv
// # 내 env파일을 읽고 각 변수들을 process.env안에 넣어주는 패키지

// apiKey: "AIzaSyA5FnsyZcl3pgtXNIKZRKIe-W7hCR4cRFA",
// authDomain: "react-community-be5da.firebaseapp.com",
// projectId: "react-community-be5da",
// storageBucket: "react-community-be5da.appspot.com",
// messagingSenderId: "84736267998",
// appId: "1:84736267998:web:5399e46fb98cc63450d44f",
