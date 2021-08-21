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

  export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createAt = new Date();

      try { 
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      }catch (error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;