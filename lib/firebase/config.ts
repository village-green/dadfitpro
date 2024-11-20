import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCr1ewzmGw-JV0p_2LJ6z2uy88gU7-j3lA",
  authDomain: "dadfitpro-c612e.firebaseapp.com",
  projectId: "dadfitpro-c612e",
  storageBucket: "dadfitpro-c612e.firebasestorage.app",
  messagingSenderId: "85204437913",
  appId: "1:85204437913:web:a059abf84f9112eddae108"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

// Initialize Firestore with persistence
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
});

// Initialize Storage
const storage = getStorage(app);

export { app, auth, db, storage };