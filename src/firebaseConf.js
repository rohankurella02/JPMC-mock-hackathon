// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOl2kwyRBh6cwnRD80ekGog05yEeM7y0o",
    authDomain: "jpmc-mock-hackathon.firebaseapp.com",
    projectId: "jpmc-mock-hackathon",
    storageBucket: "jpmc-mock-hackathon.appspot.com",
    messagingSenderId: "404673947490",
    appId: "1:404673947490:web:175c1e772e7592fc5d2e3b"
};

// Initialize Firebase
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db }