import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB9-JqFf79NmOwkj4Lg6UCDLRcUzxh2e50",
    authDomain: "quiz-app-267b3.firebaseapp.com",
    databaseURL: "https://quiz-app-267b3.firebaseio.com",
    projectId: "quiz-app-267b3",
    storageBucket: "quiz-app-267b3.appspot.com",
    messagingSenderId: "57804601906",
    appId: "1:57804601906:web:8774813a164e4618fc1a2b",
    measurementId: "G-BDY5WRNXSW"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === "granted") {
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN");
                    console.log(currentToken);
                } else {
                    // Show permission request.
                    console.log('No Instance ID token available. Request permission to generate one.');
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
            });
        }
    })
}