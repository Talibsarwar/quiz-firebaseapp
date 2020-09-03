importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDNL_a1E_2kIi-9Ego_wGn9GiaNFPRYGNs",
    authDomain: "quiz-app-267b3.firebaseapp.com",
    databaseURL: "https://quiz-app-267b3.firebaseio.com",
    projectId: "quiz-app-267b3",
    storageBucket: "quiz-app-267b3.appspot.com",
    messagingSenderId: "57804601906",
    appId: "1:57804601906:web:8774813a164e4618fc1a2b",
    measurementId: "G-BDY5WRNXSW"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();