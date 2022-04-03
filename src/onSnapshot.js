import { getFirestore, collection, query, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js'; //eslint-disable-line

const db = getFirestore();
let numberOfIncomings = "";
const incomingPost = [];
export async function newPosts() {
  const q = query(collection(db, 'Post'));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      incomingPost.push(change.doc.data());
      numberOfIncomings = incomingPost.length;
    });
    console.log(numberOfIncomings, "lo que mando");
    return numberOfIncomings;
  });
}
