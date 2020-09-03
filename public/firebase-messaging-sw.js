importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyB9-JqFf79NmOwkj4Lg6UCDLRcUzxh2e50",
  authDomain: "quiz-app-267b3.firebaseapp.com",
  databaseURL: "https://quiz-app-267b3.firebaseio.com",
  projectId: "quiz-app-267b3",
  storageBucket: "quiz-app-267b3.appspot.com",
  messagingSenderId: "63574067800",
  appId: "1:63574067800:web:1207b147471bfe2f1f982d",
  measurementId: "G-1B2S8KW79V"
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();