import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";    

const firebaseConfig = {
  apiKey: "AIzaSyDorrTw5vEsKxVHnIMQFgYhm9v6d7Jk3Qw",
  authDomain: "noothbook-app.firebaseapp.com",
  projectId: "noothbook-app",
  storageBucket: "noothbook-app.appspot.com",
  messagingSenderId: "84749013089",
  appId: "1:84749013089:web:456b5ac3ffff1f13ac1a20"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
export { db }    