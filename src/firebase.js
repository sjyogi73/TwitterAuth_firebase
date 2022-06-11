// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXoNydm5uHG6Vwded1KhmoVoxUp0Sm0N0",
  authDomain: "twitterauth-d4599.firebaseapp.com",
  databaseURL: "https://twitterauth-d4599-default-rtdb.firebaseio.com",
  projectId: "twitterauth-d4599",
  storageBucket: "twitterauth-d4599.appspot.com",
  messagingSenderId: "43819521658",
  appId: "1:43819521658:web:a58e77c009744122c38dc3",
  measurementId: "G-WQHH2JG3BT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
