import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBlQcsRBcaz6lruZj9gFNzfa3zvZa3W5NE",
    authDomain: "whatsappclone-cfe5c.firebaseapp.com",
    projectId: "whatsappclone-cfe5c",
    storageBucket: "whatsappclone-cfe5c.appspot.com",
    messagingSenderId: "931820079288",
    appId: "1:931820079288:web:a1fe11f115d2fed5ae4c4d",
    measurementId: "G-47HEFSLJTR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;