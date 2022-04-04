import { initializeApp, firebaseConfig, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider} from '../lib/firebaseConfig.js'; //eslint-disable-line 
//import { getName } from './firestore.js';//eslint-disable-line
import { onNavigate } from '../routes/main.js'; //eslint-disable-line

initializeApp(firebaseConfig);
const auth = getAuth();

export let currentUsermail = ''; //eslint-disable-line
export let currentUserid = '';
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
      //getName(currentUsermail);
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

export const logoutUser = () => {
  signOut(auth).then(() => {
}).catch((error) => {//eslint-disable-line
    // An error happened.
  });
};
