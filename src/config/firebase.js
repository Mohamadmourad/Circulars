import { initializeApp } from "firebase/app";
import { getAuth, EmailAuthCredential} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
<<<<<<< HEAD
 
=======
  apiKey: "",
>>>>>>> 593fec6fbc274c513cacd75d4c7596a098840a5d
  authDomain: "circulars-30f73.firebaseapp.com",
  projectId: "circulars-30f73",
  storageBucket: "circulars-30f73.appspot.com",
  messagingSenderId: "149233576380",
  appId: "1:149233576380:web:319d8a6d079ac37c4fe3b9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const emailAuth = new EmailAuthCredential();