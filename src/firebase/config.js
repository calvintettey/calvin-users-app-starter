import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCognqm7Cyu8C9zQ4yIvJ_dYPaCmgYYpIc",
    authDomain: "users-app-7680c.firebaseapp.com",
    databaseURL: "https://users-app-7680c.firebaseio.com",
    projectId: "users-app-7680c",
    storageBucket: "users-app-7680c.appspot.com",
    messagingSenderId: "657116262998",
    appId: "1:657116262998:web:04a5a43cef1cc5650781f7"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;