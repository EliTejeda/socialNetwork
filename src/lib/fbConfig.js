import {getFirestore, addDoc, collection, getDocs, query, where, deleteDoc, doc, setDoc, getDoc, updateDoc} from './firebaseConfig.js'; //eslint-disable-line
import {initializeApp, firebaseConfig, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider} from './firebaseConfig.js'; //eslint-disable-line
import { onNavigate } from '../routes/main.js'; //eslint-disable-line

initializeApp(firebaseConfig);
const db = getFirestore();
/* const auth = getAuth(); */
let docId = '';
let currentUserid = '';
export let currentUsermail = ''; //eslint-disable-line
let currentName = ''; //eslint-disable-line
export let errorMessage = '';//eslint-disable-line
const timeElapsed = Date.now();
const today = new Date(timeElapsed);

export const createUser = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;//eslint-disable-line
    })
    .catch((error) => {
      const errorCode = error.code;
      errorMessage = error.message;
      if (errorCode === 'auth/invalid-email') {
      alert('email invalido');//eslint-disable-line
      } else if (errorCode === 'auth/weak-password') {
      alert('contraseña invalida');//eslint-disable-line
      } else if (errorCode === 'auth/missing-email') {
      alert('falta correo');//eslint-disable-line
      } else if (errorCode === 'auth/internal-error') {
      alert('falta correo');//eslint-disable-line
      }
    });
  return createUserWithEmailAndPassword(auth, email, password);
};

export function authenticUser() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      currentUserid = user.uid;
      currentUsermail = user.email;
    } else if (user === null) {//eslint-disable-line
      onNavigate('/');
    }
  });
} authenticUser();

export const loginUser = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {//eslint-disable-line
      // console.log(userCredential);
      onNavigate('/post');
    })
    .catch((error) => {
      const errorCode = error.code;//eslint-disable-line
      errorMessage = error.message;//eslint-disable-line
      alert(errorMessage);//eslint-disable-line
    });
};

export async function getName() {//eslint-disable-line
  const q = query(collection(db, 'users'), where('correo', '==', currentUsermail));
  const querySnapshot = await getDocs(q);
  return querySnapshot;
}
getName();

export const logoutUser = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
  }).catch((error) => {//eslint-disable-line
  // An error happened.
  });
};

export async function createProfile(name, lastName, email) {
  const docRef = await addDoc(collection(db, 'users'), {
    Name: name,
    LastName: lastName,
    correo: email,
  });
  docId = docRef.id;
  console.log('Document written with ID: ', docId); //eslint-disable-line
  onNavigate('/login');
  return docRef;
}

export async function createPost(post, place, hours, money) {
  const docRef = await addDoc(collection(db, 'Post'), {
    Post: post,
    Place: place,
    Hours: hours,
    Money: money,
    Uid: currentUserid,
    Email: currentUsermail,
    Likes: [],
    Date: today,
  });
    console.log('Document written with ID: ', docRef.id); //eslint-disable-line
}
export async function getPosts() {
  const querySnapshot = await getDocs(collection(db, 'Post'));
  return querySnapshot;
}

export async function deletePost(id) {
  await deleteDoc(doc(db, 'Post', id));
  onNavigate('/post');
}

export async function editPost(id, editedPost, editedPlace, editedHours, editedMoney) {
  const postRef = doc(db, 'Post', id);
  await updateDoc(postRef, {
    Post: editedPost,
    Place: editedPlace,
    Hours: editedHours,
    Money: editedMoney,
  });
}

export const loginGoogle = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);//eslint-disable-line
      onNavigate('/post');
    }).catch((error) => {
      const errorCode = error.code;//eslint-disable-line
      const errorMessage = error.message;//eslint-disable-line
      const email = error.email;//eslint-disable-line
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);//eslint-disable-line
    });
};

export async function updateLike(id, arrayLikes) {
  const i = arrayLikes.indexOf(currentUsermail);
  if (i < 0) {
    arrayLikes.push(currentUsermail);
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
    console.log('No such document!');//eslint-disable-line
  }//eslint-disable-line
  updateLike(id, docSnap.data().Likes);
  onNavigate('/post');
}
