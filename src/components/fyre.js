import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCVOpgX4G2FUJC5cnoQbOhfBEbO80V-buo",
    authDomain: "extra-61f1b.firebaseapp.com",
    databaseURL: "https://extra-61f1b.firebaseio.com",
    projectId: "extra-61f1b",
    storageBucket: "extra-61f1b.appspot.com",
    messagingSenderId: "806587314992",
    appId: "1:806587314992:web:ab3e8d4607ebeafd3d8ef5",
    measurementId: "G-M20PDS0HL0"
};
// Initialize Firebase
const fyre= firebase.initializeApp(firebaseConfig);

export default fyre;
