// eslint-disable-next-line import/no-cycle
import { onNavigate } from './main.js';

function account() {
  const accountButtons = document.createElement('div');
  accountButtons.classList.add('startContainer');
  const startLogo = document.createElement('img');
  startLogo.classList.add('logoMuñe');
  startLogo.src = './assets/mochilerox.svg';
  const registerInput = document.createElement('input');
  registerInput.classList.add('loginInput');
  registerInput.textContent = 'Usuario';
  const passInput = document.createElement('input');
  passInput.classList.add('loginInput');
  passInput.textContent = 'Password';
  const createButton = document.createElement('button');
  createButton.classList.add('loginButton');
  createButton.textContent = 'Crear';
  createButton.addEventListener('click', () => {
    onNavigate('/');
  });
  accountButtons.append(startLogo, registerInput, passInput, createButton);
  return accountButtons;
}

export { account };
