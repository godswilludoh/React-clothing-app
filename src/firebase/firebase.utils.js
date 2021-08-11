import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyBRhnr8TOpwC4qo8Ay1iMLwqqCgStTb07w",
    authDomain: "crown-db-95ac7.firebaseapp.com",
    projectId: "crown-db-95ac7",
    storageBucket: "crown-db-95ac7.appspot.com",
    messagingSenderId: "936648183554",
    appId: "1:936648183554:web:9eef9a89c6d0c1515e3c1b",
    measurementId: "G-GTY5TK6WLE"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;