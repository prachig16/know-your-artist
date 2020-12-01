import firebase from 'firebase/app';
import 'firebase/database';


// Initialize Firebase
// *** USE YOUR CONFIG OBJECT ***
const config = {
    apiKey: "AIzaSyBxitI7WR5-FL5rHXE34cYiJaoA2BR6Wgs",
    authDomain: "know-your-artist-98df4.firebaseapp.com",
    databaseURL: "https://know-your-artist-98df4.firebaseio.com",
    projectId: "know-your-artist-98df4",
    storageBucket: "know-your-artist-98df4.appspot.com",
    messagingSenderId: "824222612452",
    appId: "1:824222612452:web:0a73ff59e1fe815249a5f1"
};
firebase.initializeApp(config);

// this exports the CONFIGURED version of firebase
export default firebase;

