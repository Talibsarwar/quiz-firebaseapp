import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDNL_a1E_2kIi-9Ego_wGn9GiaNFPRYGNs",
    authDomain: "quiz-app-267b3.firebaseapp.com",
    databaseURL: "https://quiz-app-267b3.firebaseio.com",
    projectId: "quiz-app-267b3",
    storageBucket: "expense-tracker-app-596f8.appspot.com",
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