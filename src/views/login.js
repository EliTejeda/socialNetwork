import { loginUser, authenticUser, loginGoogle} from '../appFunctions/fbConfig.js'; //eslint-disable-line
import { onNavigate } from '../routes/main.js'; //eslint-disable-line

function login() {
  const loginButtons = document.createElement('div');
  loginButtons.classList.add('startContainerlogin');
  const topInfo = document.createElement('section');
  topInfo.classList.add('topInfologin');
  const titleTop = document.createElement('img');
  titleTop.classList.add('titleTop');
  titleTop.src = './assets/Paseito.png';

  const returnstartIcon = document.createElement('img');
  returnstartIcon.classList.add('logoHome');
  returnstartIcon.src = './assets/home.png';
  returnstartIcon.addEventListener('click', () => {
    onNavigate('/');
  });

  const startLogo = document.createElement('img');
  startLogo.classList.add('logoMuñelogin');
  startLogo.src = './assets/mochilero_-orig.png';
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
  loginButton.textContent = 'Ingresar';
  const error = document.createElement('p');
  loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    loginUser(loginInput.value, passInput.value).catch((messageError) => {
      console.log(messageError);
    });
    authenticUser(loginInput.value);
  });

  const googleButton = document.createElement('img');
  googleButton.classList.add('logoGoogle');
  googleButton.src = './assets/google.png';
  googleButton.addEventListener('click', (event) => {
    event.preventDefault();
    loginGoogle();
  });
  topInfo.append(titleTop, returnstartIcon);
  loginForm.append(labelEmail, loginInput, labelPass, passInput, error, loginButton, googleButton);
  loginButtons.append(topInfo, startLogo, loginForm);
  return loginButtons;
}
export { login };
