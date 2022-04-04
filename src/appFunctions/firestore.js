import {getFirestore, addDoc, collection, getDocs, query, where, deleteDoc, doc, setDoc, getDoc, updateDoc} from '../lib/firestoreConfig.js'; //eslint-disable-line
import { onNavigate } from '../routes/main.js'; //eslint-disable-line
import { currentUsermail, currentUserid } from './firebase.js'; //eslint-disable-line

const db = getFirestore();
let docId = '';
let currentName = ''; //eslint-disable-line
export let errorMessage = '';//eslint-disable-line
const timeElapsed = Date.now();
const today = new Date(timeElapsed);

export async function getName() {//eslint-disable-line
  try {
    const q = query(collection(db, 'users'), where('correo', '==', currentUsermail));
    const querySnapshot = await getDocs(q);
    return querySnapshot;
  } catch (e) {
    console.error('Error adding document: ', e);//eslint-disable-line
  }
}

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
