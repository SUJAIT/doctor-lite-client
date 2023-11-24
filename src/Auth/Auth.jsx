// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZxm4qj_lkzMc0jhJnMbYfGmTyFoaQqaY",
  authDomain: "doctor-efcd9.firebaseapp.com",
  projectId: "doctor-efcd9",
  storageBucket: "doctor-efcd9.appspot.com",
  messagingSenderId: "947761616177",
  appId: "1:947761616177:web:11b816e0e4217875ec0c10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;