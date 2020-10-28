import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyCGnhX_L6HPlkLP9NW3Q0UztwI_ZfJBN58',
    authDomain: 'test-database-aa464.firebaseapp.com',
    databaseURL: 'https://test-database-aa464.firebaseio.com',
    projectId: 'test-database-aa464',
    storageBucket: 'test-database-aa464.appspot.com',
    messagingSenderId: '426519360427',
    appId: '1:426519360427:web:d9dcb2f75418b407fd98ee',
    measurementId: 'G-9D2CLP1QF0'
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
