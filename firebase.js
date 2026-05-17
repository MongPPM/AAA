import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBTz4iLKtBiZwHk-5pjNU1AFQF1zDhyTHI",
  authDomain: "gen-lang-client-0019812834.firebaseapp.com",
  projectId: "gen-lang-client-0019812834",
  storageBucket: "gen-lang-client-0019812834.firebasestorage.app",
  messagingSenderId: "677554753890",
  appId: "1:677554753890:web:2c13f2a2b0e019e5471c3b",
  measurementId: "G-ZMRMRWXQNV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
