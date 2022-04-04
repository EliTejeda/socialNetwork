import { getFirestore, collection, query, onSnapshot, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js'; //eslint-disable-line

const db = getFirestore();
let numberOfIncomings = '';
const incomingPost = [];
const renderizedPost = [];
let renderizedPostLength = '';

export async function renderAdvice(number) {
  const campanita = number - renderizedPostLength;
  if (campanita > 0) {
    console.log(campanita);
    const NewPostAlert = 'Hay ' + campanita + ' nuevos Paseitos.'
    alert(NewPostAlert);
  }
}

export async function newPosts() {
  const q = query(collection(db, 'Post'));
  const querySnapshot = await getDocs(collection(db, 'Post'));
  querySnapshot.forEach((postsUsers) => {
    renderizedPost.push(postsUsers);
    renderizedPostLength = renderizedPost.length;
  });
  const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        incomingPost.push(change.doc.data());
        numberOfIncomings = incomingPost.length;
      }
    });
    renderAdvice(numberOfIncomings, renderizedPostLength);
  });
}
newPosts();
