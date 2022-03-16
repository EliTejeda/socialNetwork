import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';//eslint-disable-line
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js'; //eslint-disable-line
// eslint-disable-next-line import/no-cycle
// import { onNavigate } from './main.js';

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

const app = initializeApp(firebaseConfig);
const auth = getAuth();

function account() {
  const accountButtons = document.createElement('div');
  accountButtons.classList.add('startContainer');
  const startLogo = document.createElement('img');
  startLogo.classList.add('logoMuñe');
  startLogo.src = './assets/mochilerox.svg';
  const registerInput = document.createElement('input');
  registerInput.setAttribute('id', 'user');
  registerInput.setAttribute('value', '');
  registerInput.classList.add('loginInput');
  registerInput.textContent = 'Usuario';
  const passInput = document.createElement('input');
  passInput.setAttribute('id', 'password');
  passInput.classList.add('loginInput');
  passInput.textContent = 'Password';
  const createButton = document.createElement('button');
  createButton.classList.add('loginButton');
  createButton.textContent = 'Crear';
  createButton.addEventListener('click', () => {
    console.log(registerInput.value, passInput.value);
    createUserWithEmailAndPassword(auth, registerInput.value, passInput.value)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
      // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      // ..
    });
  });
  accountButtons.append(startLogo, registerInput, passInput, createButton);
  return accountButtons;
}

export { account };
