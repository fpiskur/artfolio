import * as firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDM_DkJRLN-Ae13w6zDhCGcDpkN3gm6SVY", // old = AIzaSyCqYnDFg7-JE-vKdooy305GWHk_HNNiW3I
    authDomain: "artfoliodb.firebaseapp.com",
    databaseURL: "https://artfoliodb.firebaseio.com",
    projectId: "artfoliodb",
    storageBucket: "artfoliodb.appspot.com",
    messagingSenderId: "350110193410",
    appId: "1:350110193410:web:d6f3d0e60c39d74a18941b"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const artfoliodb = firebase.firestore();

export default firebase;