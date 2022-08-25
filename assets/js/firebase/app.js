// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCV0M-YXvmevgSHnC_a4GaboN6pnSXTN3M",
    authDomain: "stranger-things-landing-form.firebaseapp.com",
    projectId: "stranger-things-landing-form",
    storageBucket: "stranger-things-landing-form.appspot.com",
    messagingSenderId: "544067495628",
    appId: "1:544067495628:web:ec15e178f209565a678469"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app