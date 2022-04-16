// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBt5OuN7GHTbShpnz5iBJ54cZ4vX9QwjdU",
    authDomain: "artchitect-portfolio.firebaseapp.com",
    projectId: "artchitect-portfolio",
    storageBucket: "artchitect-portfolio.appspot.com",
    messagingSenderId: "42827297470",
    appId: "1:42827297470:web:0933a6e28abcf5051424ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;