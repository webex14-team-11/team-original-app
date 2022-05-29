// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNoZvVSQRRtyO1vNvjj63jTVCf1PR_ESQ",
  authDomain: "b-league-introduction.firebaseapp.com",
  projectId: "b-league-introduction",
  storageBucket: "b-league-introduction.appspot.com",
  messagingSenderId: "170456910813",
  appId: "1:170456910813:web:4b975c7a9afed8d96fc434",
  measurementId: "G-E92BM83KDQ",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
