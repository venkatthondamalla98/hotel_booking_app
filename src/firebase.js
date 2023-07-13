// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbYGwkViJgPwmFiBbJUe7mJcOyXNYCWZ0",
  authDomain: "bookyourroom-75b33.firebaseapp.com",
  projectId: "bookyourroom-75b33",
  storageBucket: "bookyourroom-75b33.appspot.com",
  messagingSenderId: "492820445427",
  appId: "1:492820445427:web:50565d7772bea6bd94df86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
