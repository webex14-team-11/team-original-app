// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0U0IbJIiWitYInaVhqvWIP9NByiQuBNs",
  authDomain: "team11-41843.firebaseapp.com",
  projectId: "team11-41843",
  storageBucket: "team11-41843.appspot.com",
  messagingSenderId: "486826068879",
  appId: "1:486826068879:web:26615617581fb2f6e199fa",
  measurementId: "G-S1E7880Z5N",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
