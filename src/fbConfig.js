import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js'; //eslint-disable-line
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js'; //eslint-disable-line
import {getFirestore, addDoc, collection, getDocs} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js'; //eslint-disable-line
import { onNavigate } from './main.js'; //eslint-disable-line

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
      if (errorCode === 'auth/invalid-email') {
        alert('email invalido');
      } else if (errorCode === 'auth/wrong-password') {
        alert('contraseña invalida');
      } else if (errorCode === 'auth/missing-email') {
        alert('falta correo');
      } else if (errorCode === 'auth/internal-error') {
        alert('falta contraseña');
      } else if (errorCode === 'auth/user-not-found') {
        alert('Usuario no encontrado');
      }
      console.log(errorCode);
    });
};

let currentUserid = '';
let currentUsermail = '';
export function authenticUser() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      currentUserid = user.uid;
      currentUsermail = user.email;
      console.log(user);
    } else if (user === null) {
      console.log('no logueado');
      onNavigate('/');
    }
  });
}
/* export async function getCurrentuser() {
  const db = getFirestore();
  const eachpost = [];
  const querySnapshot = await getDocs(collection(db, 'Post'));
  querySnapshot.forEach((doc) => {
    const currentUser = doc.data().Uid;
    console.log(currentUser);
    const onepost = doc.data().Post;
    const published = document.createElement('p');
    published.textContent = onepost;
    console.log(eachpost);
    eachpost.push(published);
  });
  return eachpost;
} */

export async function createProfile(name, lastName, email) {
  const db = getFirestore();
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      Name: name,
      LastName: lastName,
      correo: email,
    });
    console.log('Document written with ID: ', docRef.id);
    onNavigate('/login');
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function createPost(post) {
  const db = getFirestore();
  try {
    const docRef = await addDoc(collection(db, 'Post'), {
      Post: post,
      Uid: currentUserid,
      Email: currentUsermail,
    });
    console.log('Document written with ID: ', docRef.id);
    console.log(currentUserid);
    console.log(docRef);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function getPosts() {
  const db = getFirestore();
  const eachpost = [];
  const querySnapshot = await getDocs(collection(db, 'Post'));
  querySnapshot.forEach((doc) => {
    const currentUser = doc.data().Uid;
    console.log(currentUser);
    const onepost = doc.data().Post;
    const published = document.createElement('p');
    published.textContent = onepost;
    console.log(eachpost);
    eachpost.push(published);
  });
  return eachpost;
}
