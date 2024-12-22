import firebase from "firebase"

const firebaseConfig = {
  apiKey: "",
  authDomain: "spacex-dashboard-4e8f6.firebaseapp.com",
  projectId: "spacex-dashboard-4e8f6",
  storageBucket: "spacex-dashboard-4e8f6.appspot.com",
  messagingSenderId: "184243553604",
  appId: "",
  measurementId: ""
}

export const app = firebase.initializeApp(firebaseConfig)
export const auth = app.auth()
export const db = app.database()