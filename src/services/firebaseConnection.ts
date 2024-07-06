import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBycE_XuKC8z9FxvWuhKPo7Lrami7B7PP4",
  authDomain: "devlinktree-487e3.firebaseapp.com",
  projectId: "devlinktree-487e3",
  storageBucket: "devlinktree-487e3.appspot.com",
  messagingSenderId: "749727128957",
  appId: "1:749727128957:web:59c9985eb6673a4db70014",
};

console.log('Firebase Config:', firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
