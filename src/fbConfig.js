import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';//eslint-disable-line
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js'; //eslint-disable-line
import {getFirestore, addDoc, collection} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js'; //eslint-disable-line
import { onNavigate } from './main.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAN69Jcjpn08merb6zgalYMP8kZwU9jiWg',
  authDomain: 'paseito-app.firebaseapp.com',
  databaseURL: 'https://paseito-app-default-rtdb.firebaseio.com',
  projectId: 'paseito-app',
  storageBucket: 'paseito-app.appspot.com',
  messagingSenderId: '929104207160',
  appId: '1:929104207160:web:493523edce45a5eb54f5cd',
  measurementId: 'G-WC99VEW5LB',
};
initializeApp(firebaseConfig);
export const createUser = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert('Cuenta creada con éxito!');
      onNavigate('/login');
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/invalid-email') {
        alert('email invalido');
      } else if (errorCode === 'auth/weak-password') {
        alert('contraseña invalida');
      } else if (errorCode === 'auth/missing-email') {
        alert('falta correo');
      } else if (errorCode === 'auth/internal-error') {
        alert('falta correo');
      }
    });
};

export const loginUser = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      onNavigate('/post');
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
    });
};

let userId = '';
let mail = '';
export function authenticUser() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userId = user.uid;
      mail = user.email;
      console.log(mail);
    } else if (user === null) {
      console.log('no logueado');
      onNavigate('/');
    }
  });
}
authenticUser();

export async function createProfile(name, lastName, email, password) {
  const db = getFirestore();
  console.log(db);
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      Name: name,
      LastName: lastName,
      correo: email,
      contraseña: password,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function createPost(post) {
  const db = getFirestore();
  try {
    const docRef = await addDoc(collection(db, 'Post'), {
      Post: post,
      Uid: userId,
      Email: mail,
    });
    console.log('Document written with ID: ', docRef.id);
    console.log(userId);
    console.log(docRef);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
