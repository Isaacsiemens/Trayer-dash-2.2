import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBBDUh_m3qRi9pc_Mjk-xXeFg7fvotdWz4",
  authDomain: "switchframe-app.firebaseapp.com",
  projectId: "switchframe-app",
  storageBucket: "switchframe-app.firebasestorage.app",
  messagingSenderId: "1056093287854",
  appId: "1:1056093287854:web:2d6097225794ea2c73043f",
  measurementId: "G-873B22R1ZT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);