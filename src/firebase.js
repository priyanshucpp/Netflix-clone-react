// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  //   apiKey: "AIzaSyBVMqkh-yPp98psXmnOvnN1pd-iXaBv5B8",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  //   authDomain: "netflix-react-8e504.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //   projectId: "netflix-react-8e504",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //   storageBucket: "netflix-react-8e504.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  //   messagingSenderId: "476378572741",
  appId: process.env.REACT_APP_APP_ID,
  //   appId: "1:476378572741:web:3d2b6c8bc8dd7974850dac",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
