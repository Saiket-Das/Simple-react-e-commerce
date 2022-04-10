// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLwxxaff1A-AzdqcSYNBoo0UrRhhFOhRs",
    authDomain: "ema-jhon-simple-2651f.firebaseapp.com",
    projectId: "ema-jhon-simple-2651f",
    storageBucket: "ema-jhon-simple-2651f.appspot.com",
    messagingSenderId: "313569850506",
    appId: "1:313569850506:web:28256e7af5db44386ee973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;