import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGfSTwyBm2vezc1xjzKuneBRL19rQgnl0",
  authDomain: "blog10301231.firebaseapp.com",
  projectId: "blog10301231",
  storageBucket: "blog10301231.appspot.com",
  messagingSenderId: "1005265107263",
  appId: "1:1005265107263:web:56c126016f1de9944d7b8a",
  measurementId: "G-QPHMR0RF28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDB, auth, storage };