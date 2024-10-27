// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpwRXbVXf0ZpTBPPVoISRp_tPhovFrMHg",
  authDomain: "e-learningtool-58aaa.firebaseapp.com",
  projectId: "e-learningtool-58aaa",
  storageBucket: "e-learningtool-58aaa.appspot.com",
  messagingSenderId: "346722343527",
  appId: "1:346722343527:web:67deffde75eb34bef452c2",
  measurementId: "G-HT1V6YBM9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth };