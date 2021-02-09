import firebase from 'firebase';
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDTDHlcAllNPj2dN-Egsgp4lroLfK-Xu_A",
    authDomain: "quiz-fd173.firebaseapp.com",
    projectId: "quiz-fd173",
    storageBucket: "quiz-fd173.appspot.com",
    messagingSenderId: "1079258307253",
    appId: "1:1079258307253:web:20d7367d94e293f9ac7cfc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();