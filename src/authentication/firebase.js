import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNsoePUgxvTxEnzTxcXrj4oQ8z3f7468U",
  authDomain: "pair-98-dts-mini-project.firebaseapp.com",
  projectId: "pair-98-dts-mini-project",
  storageBucket: "pair-98-dts-mini-project.appspot.com",
  messagingSenderId: "1035404162701",
  appId: "1:1035404162701:web:804b1a9b60cb5f691f94c4",
  measurementId: "G-MQBK3FQ21Y"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth };
export default db;