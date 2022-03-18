import { createUser, createProfile } from './fbConfig.js';
// eslint-disable-next-line import/no-cycle
// import { onNavigate } from './main.js';

function account() {
  const accountButtons = document.createElement('div');
  accountButtons.classList.add('startContainer');
  const startLogo = document.createElement('img');
  startLogo.classList.add('logoMuñe');
  startLogo.src = './assets/mochilerox.svg';
  const userName = document.createElement('input');
  userName.setAttribute('placeholder', 'Nombre');
  userName.classList.add('loginInput');
  const userLastName = document.createElement('input');
  userLastName.setAttribute('placeholder', 'Apellido');
  userLastName.classList.add('loginInput');
  const registerInput = document.createElement('input');
  registerInput.setAttribute('id', 'user');
  registerInput.classList.add('loginInput');
  registerInput.setAttribute('placeholder', 'CORREO');
  registerInput.textContent = 'Usuario';
  registerInput.setAttribute("placeholder", "CORREO");
  const passInput = document.createElement('input');
  passInput.setAttribute('placeholder', 'CONTRASEÑA');
  passInput.setAttribute('id', 'password');
  passInput.setAttribute('type', 'password');
  passInput.classList.add('loginInput');
  passInput.textContent = 'Password';
  passInput.setAttribute("placeholder", "CONTRASEÑA");
  passInput.setAttribute('type', 'password');

  const createButton = document.createElement('button');
  createButton.classList.add('loginButton');
  createButton.textContent = 'Crear';
  createButton.addEventListener('click', () => {
    createUser(registerInput.value, passInput.value);
    createProfile(userName.value, userLastName.value, registerInput.value, passInput.value);
  });
  accountButtons.append(startLogo, userName, userLastName, registerInput, passInput, createButton);
  return accountButtons;
}
export { account };
