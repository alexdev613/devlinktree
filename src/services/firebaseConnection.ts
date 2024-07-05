import { initializeApp } from "firebase/app";
// importar os módulos de banco de dados e autenticação:
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBycE_XuKC8z9FxvWuhKPo7Lrami7B7PP4",
    authDomain: "devlinktree-487e3.firebaseapp.com",
    projectId: "devlinktree-487e3",
    storageBucket: "devlinktree-487e3.appspot.com",
    messagingSenderId: "749727128957",
    appId: "1:749727128957:web:bb37fc70f0b3ef8bb70014"
  };

const app = initializeApp(firebaseConfig);
// inicializar os serviços de autenticação e de banco de dados:
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };