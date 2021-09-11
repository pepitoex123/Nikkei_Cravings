
import firebase from "firebase/app";
import 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBA12ZDh_yWjLt6ZD66F6qbR5A9FUDJ9mc",
    authDomain: "nikkei-cravings.firebaseapp.com",
    projectId: "nikkei-cravings",
    storageBucket: "nikkei-cravings.appspot.com",
    messagingSenderId: "214756567098",
    appId: "1:214756567098:web:c57e3a33c17b3b00ec6d03"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app
}

export const getFirestore = () => {
    return firebase.firestore(app)
}