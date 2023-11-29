import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBw1JOn075SpkJihhLPdVkIhJ4p_iSbKUA",
    authDomain: "fir-e2cc4.firebaseapp.com",
    projectId: "fir-e2cc4",
    storageBucket: "fir-e2cc4.appspot.com",
    messagingSenderId: "594800883691",
    appId: "1:594800883691:web:f600dfc4d82a60fd3e8bae",
    measurementId: "G-P8XGNWFD4D"
  };

  export default firebase.initializeApp(firebaseConfig)