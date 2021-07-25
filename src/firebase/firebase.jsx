import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBdEWQpnf7_vqUY6whxAIy-lrCNHdpahRY",
    authDomain: "proyecto-react-coder-77880.firebaseapp.com",
    projectId: "proyecto-react-coder-77880",
    storageBucket: "proyecto-react-coder-77880.appspot.com",
    messagingSenderId: "270059890275",
    appId: "1:270059890275:web:ee00c10254059716403a56"
};
const app = firebase.initializeApp(firebaseConfig);
export function getFirebase() {
  return app;
}
export const database = firebase.firestore();