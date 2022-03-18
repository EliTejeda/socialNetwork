// eslint-disable-next-line import/no-cycle
import { onNavigate } from './main.js';

function start() {
  const startButtons = document.createElement('div');
  startButtons.classList.add('startContainer');
  const startLogo = document.createElement('img');
  startLogo.classList.add('logoMuñe');
  startLogo.src = './assets/mochilero.png';
  const titleStart = document.createElement('h1');
  titleStart.classList.add('titleStart');
  titleStart.textContent = 'PASEITO';
  const loginButton = document.createElement('button');
  loginButton.classList.add('loginButton');
  loginButton.textContent = 'Login';
  loginButton.addEventListener('click', () => {
    onNavigate('/login');
  });
  const registerButton = document.createElement('button');
  registerButton.classList.add('loginButton');
  registerButton.textContent = 'Registrar';
  registerButton.addEventListener('click', () => {
    onNavigate('/account');
  });
  startButtons.append(startLogo, titleStart, loginButton, registerButton);
  return startButtons;
}
export { start };
