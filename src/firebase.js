import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA1lWY43PzD7KZgznEeqTaoKdzPQ5vnBPs",
    authDomain: "tesla-clone-ab54a.firebaseapp.com",
    projectId: "tesla-clone-ab54a",
    storageBucket: "tesla-clone-ab54a.appspot.com",
    messagingSenderId: "742164558893",
    appId: "1:742164558893:web:e4000fc41351323ae0f4a4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebaseApp.auth()

  export { auth }