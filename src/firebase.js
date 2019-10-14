import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
  apiKey: 'apiKey',
  authDomain: 'authDomain',
  databaseURL: 'authDomain',
  projectId: 'authDomain',
  storageBucket: 'authDomain',
  messagingSenderId: 'messagingSenderId',
  appId: 'appId'
})

export { firebaseConfig as firebase }
