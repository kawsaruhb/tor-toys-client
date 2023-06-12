// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnccCkI0PySXKGlPWEpQLJwVu756aR_vU",
    authDomain: "tor-toys-client.firebaseapp.com",
    projectId: "tor-toys-client",
    storageBucket: "tor-toys-client.appspot.com",
    messagingSenderId: "924200608712",
    appId: "1:924200608712:web:9cc5f4e9b30c8626e096fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;