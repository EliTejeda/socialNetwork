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
export let currentUsermail = ''; //eslint-disable-line
let currentName = ''; //eslint-disable-line
export let errorMessage = '';//eslint-disable-line
const timeElapsed = Date.now();
const today = new Date(timeElapsed);

initializeApp(firebaseConfig);
export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert('Cuenta creada con éxito!');
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
     /*  if (errorCode === 'auth/invalid-email') {
        alert('email invalido');
      } else if (errorCode === 'auth/weak-password') {
        alert('contraseña invalida');
      } else if (errorCode === 'auth/missing-email') {
        alert('falta correo');
      } else if (errorCode === 'auth/internal-error') {
        alert('falta correo');
      } else if (errorCode === 'auth/email-already-in-use') {
        alert('correo existe');
      } */
    });
};

export function authenticUser() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      currentUserid = user.uid;
      currentUsermail = user.email;
    } else if (user === null) {
      onNavigate('/');
    }
  });
}
authenticUser();

export const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {//eslint-disable-line
      // console.log(userCredential);
      onNavigate('/post');
    })
    .catch((error) => {
      const errorCode = error.code;//eslint-disable-line
      errorMessage = error.message;//eslint-disable-line
      alert(errorMessage);
    });
};

export async function getName() {//eslint-disable-line
  try {
    const q = query(collection(db, 'users'), where('correo', '==', currentUsermail));
    const querySnapshot = await getDocs(q);
    return querySnapshot;
  } catch (e) {
    console.error('Error adding document: ', e);//eslint-disable-line
  }
}
getName();

export const logoutUser = () => {
  signOut(auth).then(() => {
  }).catch((error) => {//eslint-disable-line
  // An error happened.
  });
};

export async function createProfile(name, lastName, email) {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      Name: name,
      LastName: lastName,
      correo: email,
    });
    docId = docRef.id;
    console.log('Document written with ID: ', docId); //eslint-disable-line
  } catch (e) {
    console.error('Error adding document: ', e);//eslint-disable-line
    console.log(console.error);//eslint-disable-line
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
      Date: today,
    });
    console.log('Document written with ID: ', docRef.id); //eslint-disable-line
  } catch (e) {
    console.error('Error adding document: ', e);//eslint-disable-line
  }
}
export async function getPosts() {
  const querySnapshot = await getDocs(collection(db, 'Post'));
  return querySnapshot;
}
/* export async function editLike(likes, id) {
  console.log(likes, id);
  console.log(currentUsermail);
  const postRef = onSnapshot(doc(db, 'Post', id));
  console.log(postRef);
  const contentLikes = likes.includes(currentUsermail);
  if (contentLikes) {
    await updateDoc(postRef, {
      Likes: arrayRemove(currentUsermail),
    });
    console.log('unlike');
  } else if (!contentLikes) {
    await updateDoc(postRef, {
      Likes: arrayUnion(currentUsermail),
       });
    console.log('like');
  }
 } */
export async function Test() {
  const postRef = onSnapshot(collection(db, 'Post'));
  console.log('onSnapshot-db Post', postRef);
  const postRef1 = collection(db, 'Post');
  console.log('collection db', postRef1);
  const docRef = doc(db, 'Post', 'Email');
  console.log('doc db', docRef);
  const docSnap = await getDoc(docRef);
  console.log('await getDoc Post Email', docSnap);
  const querySnapshot = await getDocs(collection(db, 'Post'));
  console.log('await getDocs collection db Post', querySnapshot);
}
Test();

/*  const contentLikes = likes.includes(currentUsermail);
  if (contentLikes) {
     updateDoc(postRef, {
      Likes: arrayRemove(currentUsermail),
    });
    console.log('unlike');
  } else if (!contentLikes) {
    updateDoc(postRef, {
      Likes: arrayUnion(currentUsermail),
       });
    console.log('like');
  }
});
} */
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
  }
  console.log(docSnap.data().Likes, 'lo que manda ALIKE');//eslint-disable-line
  updateLike(id, docSnap.data().Likes);
  onNavigate('/post');
}
