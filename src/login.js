// eslint-disable-next-line import/no-cycle
import { onNavigate } from './main.js';
import { loginUser } from './fbConfig.js';

function login() {
  const loginButtons = document.createElement('div');
  loginButtons.classList.add('startContainer');
  const startLogo = document.createElement('img');
  startLogo.classList.add('logoMuñe');
  startLogo.src = './assets/mochilero.png';
  const loginInput = document.createElement('input');
  loginInput.classList.add('loginInput');
  loginInput.textContent = 'Usuario';
  loginInput.setAttribute('placeholder', 'CORREO');
  const passInput = document.createElement('input');
  passInput.classList.add('loginInput');
  passInput.setAttribute('placeholder', 'CONTRASEÑA');
  passInput.textContent = 'Password';
  passInput.setAttribute('type', 'password');
  const loginButton = document.createElement('button');
  loginButton.classList.add('loginButton');
  loginInput.setAttribute('placeholder', 'CORREO');
  loginButton.textContent = 'Ingresar';
  loginButton.addEventListener('click', () => {
    loginUser(loginInput.value, passInput.value);
  });
  loginButtons.append(startLogo, loginInput, passInput, loginButton);
  return loginButtons;
}
export { login };
