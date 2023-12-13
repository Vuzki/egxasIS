// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4yHyOHn1ihSjbsAmtVQ_MvKi852AlkiU",
  authDomain: "egzaminas-ac6a3.firebaseapp.com",
  projectId: "egzaminas-ac6a3",
  storageBucket: "egzaminas-ac6a3.appspot.com",
  messagingSenderId: "687294844983",
  appId: "1:687294844983:web:877a3f207eb7041089efb2",
  measurementId: "G-SR83B05T8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);