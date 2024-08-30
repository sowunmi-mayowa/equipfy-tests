import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA40GSIPSoY--XmbhD6Y9sXt2ByrABgwkU",
    authDomain: "equipfy.firebaseapp.com",
    projectId: "equipfy",
    storageBucket: "equipfy.appspot.com",
    messagingSenderId: "1034408193031",
    appId: "1:1034408193031:web:966ab68282cb074b834ea2",
    measurementId: "G-5CN1GMSN50"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
