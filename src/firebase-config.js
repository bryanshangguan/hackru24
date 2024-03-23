import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, deleteDoc, updateDoc, arrayUnion, query, collection, where, getDocs, documentId, onSnapshot } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFunctions } from 'firebase/functions'

const firebaseConfig = {
    apiKey: 'AIzaSyAWjlJ8MlSiDiCaskF1BT6jWUzsDAL7Mp4',
    authDomain: 'hackru24-5c1a5.firebaseapp.com',
    projectId: 'hackru24-5c1a5',
    storageBucket: 'hackru24-5c1a5.appspot.com',
    messagingSenderId: '152414673212',
    appId: '1:152414673212:web:5ae9788c204fd9eab7e639',
    measurementId: 'G-VVJRSY05FZ'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth(app);
const storage = getStorage(app);
const functions = getFunctions(app);
let uid;

onAuthStateChanged(auth, (user) => {
    if (user) {
        uid = user.uid;
    } else {
        console.log('No user is signed in.');
    }
});

export { db, doc, getDoc, setDoc, deleteDoc, updateDoc, arrayUnion, query, collection, where, getDocs, onSnapshot, documentId, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, analytics, storage, ref, uploadBytes, getDownloadURL, onAuthStateChanged, uid, functions };