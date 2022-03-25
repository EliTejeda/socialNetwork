import { loginUser, authenticUser, loginGoogle} from './fbConfig.js'; //eslint-disable-line
import { onNavigate } from './main.js'; //eslint-disable-line

function login() {
  const loginButtons = document.createElement('div');

  const topInfo = document.createElement('section');
  topInfo.classList.add('topInfo');
  const titleTop = document.createElement('h1');
  titleTop.classList.add('titleTop');
  titleTop.textContent = 'PASEITO';

  const returnstartIcon = document.createElement('img');
  returnstartIcon.classList.add('logoHome');
  returnstartIcon.src = './assets/home.png';
  returnstartIcon.addEventListener('click', () => {
    onNavigate('/');
  });

  loginButtons.classList.add('startContainer');
  const startLogo = document.createElement('img');
  startLogo.classList.add('logoMuñe');
  startLogo.src = './assets/mochilerox.svg';
  const loginForm = document.createElement('form');
  loginForm.classList.add('loginForm');
  const labelEmail = document.createElement('label');
  labelEmail.setAttribute('for', 'loginEmail');
  const loginInput = document.createElement('input');
  loginInput.classList.add('loginInput');
  loginInput.setAttribute('placeholder', 'Correo');
  loginInput.setAttribute('id', 'loginEmail');
  const passInput = document.createElement('input');
  passInput.classList.add('loginInput');
  passInput.setAttribute('placeholder', 'Contraseña');
  passInput.textContent = 'Password';
  passInput.setAttribute('type', 'password');
  passInput.setAttribute('id', 'labelPass');
  const labelPass = document.createElement('label');
  labelPass.setAttribute('for', 'labelPass');
  const loginButton = document.createElement('button');
  loginButton.classList.add('loginButton');
  loginInput.setAttribute('placeholder', 'Correo');
  loginButton.textContent = 'INGRESAR';
  loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    loginUser(loginInput.value, passInput.value);
    authenticUser(loginInput.value);
  });
  const googleButton = document.createElement('img');
  googleButton.classList.add('logoMuñePost');
  googleButton.src = './assets/google.png';
  googleButton.addEventListener('click', (event) => {
    event.preventDefault();
    loginGoogle();
  });
  loginForm.append(labelEmail, loginInput, labelPass, passInput, loginButton, googleButton);
  topInfo.append(titleTop, returnstartIcon);
  loginButtons.append(startLogo, loginForm);
  return loginButtons;
}
export { login };
