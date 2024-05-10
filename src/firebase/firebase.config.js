// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQNSC2TQ8BxQGPZxSb-W2fcySK9Sg7D_o",
  authDomain: "online-study-client.firebaseapp.com",
  projectId: "online-study-client",
  storageBucket: "online-study-client.appspot.com",
  messagingSenderId: "458579121893",
  appId: "1:458579121893:web:1e5fffff4fb68324e7260c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
