import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA7Dg2DnFUlTsbNsDAvtPy8OCwD8JMBoHo",
    authDomain: "ebay-4a3d8.firebaseapp.com",
    projectId: "ebay-4a3d8",
    storageBucket: "ebay-4a3d8.appspot.com",
    messagingSenderId: "1000734247762",
    appId: "1:1000734247762:web:fcfbab7795f701e8cb488b",
    measurementId: "G-4V14L3F4NY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebaseApp.firestore();
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  firebase.auth().signInWithPopup(provider).then(function(result) {
   var token = result.credential.accessToken;
   var user = result.user;
  });

  export {auth, provider, db}