import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js'; //eslint-disable-line 

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
};

export const firebaseConfig = {
  apiKey: 'AIzaSyAN69Jcjpn08merb6zgalYMP8kZwU9jiWg',
  authDomain: 'paseito-app.firebaseapp.com',
  databaseURL: 'https://paseito-app-default-rtdb.firebaseio.com',
  projectId: 'paseito-app',
  storageBucket: 'paseito-app.appspot.com',
  messagingSenderId: '929104207160',
  appId: '1:929104207160:web:493523edce45a5eb54f5cd',
  measurementId: 'G-WC99VEW5LB',
};

export {
  initializeApp,
};
