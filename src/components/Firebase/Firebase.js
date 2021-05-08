import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
   
    
        apiKey: "AIzaSyDjmiv7P4D5l3eoIOetDerIKnmUmg8XQfg",
        authDomain: "facebookmessenger-ec756.firebaseapp.com",
        projectId: "facebookmessenger-ec756",
        storageBucket: "facebookmessenger-ec756.appspot.com",
        messagingSenderId: "413292405477",
        appId: "1:413292405477:web:0e0bb0bf5d9d9bc92aea0c",
        measurementId: "G-52R919H0HE"

});

const db = firebaseApp.firestore();

export default db;
