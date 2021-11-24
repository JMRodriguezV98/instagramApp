// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAInX2Q7CVem1N-IMEzBklHta3QhZfPlGY",
  authDomain: "autenticacion-ee206.firebaseapp.com",
  projectId: "autenticacion-ee206",
  storageBucket: "autenticacion-ee206.appspot.com",
  messagingSenderId: "339408384240",
  appId: "1:339408384240:web:4802c8743e17f496995235",
  measurementId: "G-C3ZEQ7XKJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);