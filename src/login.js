// eslint-disable-next-line import/no-cycle
import { onNavigate } from './main.js';

function login() {
  const loginButtons = document.createElement('div');
  loginButtons.classList.add('startContainer');
  const startLogo = document.createElement('img');
  startLogo.classList.add('logoMuñe');
  startLogo.src = './assets/mochilerox.svg';
  const loginInput = document.createElement('input');
  loginInput.classList.add('loginInput');
  loginInput.textContent = 'Usuario';
  loginInput.setAttribute('placeholder', 'CORREO');
  const passInput = document.createElement('input');
  passInput.classList.add('loginInput');
  passInput.setAttribute('placeholder', 'CONTRASEÑA');
  passInput.textContent = 'Password';
  const loginButton = document.createElement('button');
  loginButton.classList.add('loginButton');
  loginInput.setAttribute('placeholder', 'CORREO');
  loginButton.textContent = 'Ingresar';
  loginButton.addEventListener('click', () => {
    onNavigate('/');
  });
  loginButtons.append(startLogo, loginInput, passInput, loginButton);
  return loginButtons;
}
export { login };
