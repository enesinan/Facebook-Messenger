import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

  apiKey: "YOUR_API_KEY",
  AuthDomain: "YOUR_PROJECT_AUTH_DOMAIN",
  databaseURL: "YOUR_PROJECT_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_STORAGE_BUCKET",
  messagingSenderId: "YOUR_PROJECT_MESSAGING_SENDER_ID",
  appId: "YOUR_PROJECT_APP_ID"

});

const db = firebaseApp.firestore();

export default db;



