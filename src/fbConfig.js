import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js'; //eslint-disable-line
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js'; //eslint-disable-line
import {getFirestore, addDoc, collection, getDocs, query, where, deleteDoc, doc, setDoc, getDoc, updateDoc} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js'; //eslint-disable-line
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
const db = getFirestore();
const auth = getAuth();
let docId = '';
let currentUserid = '';
export let currentUsermail = '';
let currentName = '';
export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
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
export function authenticUser() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      currentUserid = user.uid;
      currentUsermail = user.email;
      console.log(currentUsermail);
    } else if (user === null) {
      console.log('no logueado');
      onNavigate('/');
    }
  });
} authenticUser();

export const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // console.log(userCredential);
      onNavigate('/post');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export async function getName() {
  try {
    const q = query(collection(db, 'users'), where('correo', '==', currentUsermail));
    const querySnapshot = await getDocs(q);
    return querySnapshot;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
getName();

export const logoutUser = () => {
  signOut(auth).then(() => {
    alert('Gracias');
  }).catch((error) => {
  // An error happened.
  });
};

export async function createProfile(name, lastName, email) {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      Name: name,
      LastName: lastName,
      correo: email,
      docName: docId,
    });
    docId = docRef.id;
    console.log('Document written with ID: ', docRef.Name);
    onNavigate('/login');
  } catch (e) {
    console.error('Error adding document: ', e);
    console.log(console.error);
    onNavigate('/account');
  }
}

export async function createPost(post, place, hours, money) {
  try {
    const docRef = await addDoc(collection(db, 'Post'), {
      Post: post,
      Place: place,
      Hours: hours,
      Money: money,
      Uid: currentUserid,
      Email: currentUsermail,
      Likes: [],
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
export async function getPosts() {
  const eachpost = [];
  const querySnapshot = await getDocs(collection(db, 'Post'));
  querySnapshot.forEach((onedoc) => {
    const onepost = onedoc.data().Post;
    const like = onedoc.data().Likes;
    const place = onedoc.data().Place;
    const money = onedoc.data().Money;
    const hours = onedoc.data().Hours;
    const email = onedoc.data().Email;
    const idPost = onedoc.id;
    /* const postID = onedoc.data().; */
    const arrayPost = [];
    arrayPost.push(onepost, like, money, place, hours, idPost, email);
    eachpost.push(arrayPost);
  });
  return eachpost;
}

export async function deletePost(id) {
  await deleteDoc(doc(db, 'Post', id));
  onNavigate('/post');
}

export async function editPost(id, editedPost) {
  const postRef = doc(db, 'Post', id);
  await updateDoc(postRef, {
    Post: editedPost,
  });
}

export const loginGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log('logeadoGoogle');
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(credential);
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      onNavigate('/post');
    }).catch((error) => {
      console.log(user, error);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export async function updateLike(id, arrayLikes) {
  const i = arrayLikes.indexOf(currentUsermail);
  console.log(arrayLikes, 'antes push');
  console.log(i);
  if (i < 0) {
    console.log('esverdadero');
    arrayLikes.push(currentUsermail);
    console.log(arrayLikes, 'después push');
  } else {
    arrayLikes.splice(i, 1);
  }
  const likes = doc(db, 'Post', id);
  setDoc(likes, { Likes: arrayLikes }, { merge: true });
}

export async function aLike(id) {
  const docRef = doc(db, 'Post', id);
  const docSnap = await getDoc(docRef);
  // eslint-disable-next-line no-empty
  if (docSnap.exists()) {
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
  console.log(docSnap.data().Likes, 'lo que manda ALIKE');
  updateLike(id, docSnap.data().Likes);
  onNavigate('/post');
}
