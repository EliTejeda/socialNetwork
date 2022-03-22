// eslint-disable-next-line import/no-cycle
import { loginUser} from './fbConfig.js';

function login() {
  const loginButtons = document.createElement('div');
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
  loginInput.setAttribute('placeholder', 'CORREO');
  loginInput.setAttribute('id', 'loginEmail');
  const passInput = document.createElement('input');
  passInput.classList.add('loginInput');
  passInput.setAttribute('placeholder', 'CONTRASEÑA');
  passInput.textContent = 'Password';
  passInput.setAttribute('type', 'password');
  passInput.setAttribute('id', 'labelPass');
  const labelPass = document.createElement('label');
  labelPass.setAttribute('for', 'labelPass');
  const loginButton = document.createElement('button');
  loginButton.classList.add('loginButton');
  loginInput.setAttribute('placeholder', 'CORREO');
  loginButton.textContent = 'Ingresar';
  loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    autenticUser(loginInput.value);
    loginUser(loginInput.value, passInput.value);
  });
  loginForm.append(labelEmail, loginInput, labelPass, passInput, loginButton);
  loginButtons.append(startLogo, loginForm);
  return loginButtons;
}
export { login };
