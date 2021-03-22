import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD8AIyH07CgxiXh_MYDkGXHaRibPwG1PWo",
    authDomain: "instagram-clone-b10c2.firebaseapp.com",
    projectId: "instagram-clone-b10c2",
    storageBucket: "instagram-clone-b10c2.appspot.com",
    messagingSenderId: "209457037805",
    appId: "1:209457037805:web:11dd7e8723579af35967e4",
    measurementId: "G-J22VCDM4VC" 
})

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage };