// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHTyuktEFDW-DRW-YIkKNaCMl4ZYIsYX8",
  authDomain: "mini-project-dts-pair-98.firebaseapp.com",
  projectId: "mini-project-dts-pair-98",
  storageBucket: "mini-project-dts-pair-98.appspot.com",
  messagingSenderId: "1064455605761",
  appId: "1:1064455605761:web:4ac030377bcf8be315fa00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signUp = async (email, password) => {
  try {
    const getUser = await createUserWithEmailAndPassword(auth, email, password);
    console.log(getUser.user);
  } catch (err) {
    console.log(err.code);
    console.log(err.message);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err.code);
    console.log(err.message);
  }
};
const logOut = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export { auth, signUp, login, logOut };
