import { createUser, createProfile } from './fbConfig.js'; //eslint-disable-line
import { post } from './post.js';//eslint-disable-line
// eslint-disable-next-line import/no-cycle

function account() {
  const accountButtons = document.createElement('div');
  accountButtons.classList.add('startContainer');
  const startLogo = document.createElement('img');
  startLogo.classList.add('logoMuñe');
  startLogo.src = './assets/mochilerox.svg';
  const accountForm = document.createElement('form');
  accountForm.classList.add('loginForm');
  const labelName = document.createElement('label');
  labelName.setAttribute('for', 'accountName');
  const userName = document.createElement('input');
  userName.setAttribute('placeholder', 'Nombre');
  userName.setAttribute('id', 'accountName');
  userName.classList.add('loginInput');
  const labelLastName = document.createElement('label');
  labelLastName.setAttribute('for', 'accountLastName');
  const userLastName = document.createElement('input');
  userLastName.setAttribute('placeholder', 'Apellido');
  userLastName.setAttribute('id', 'accountLastName');
  userLastName.classList.add('loginInput');
  const registerInput = document.createElement('input');
  registerInput.setAttribute('id', 'user');
  registerInput.classList.add('loginInput');
  registerInput.setAttribute('placeholder', 'CORREO');
  registerInput.textContent = 'Usuario';
  registerInput.setAttribute('id', 'labelName');
  const passInput = document.createElement('input');
  passInput.setAttribute('placeholder', 'CONTRASEÑA');
  passInput.setAttribute('id', 'password');
  passInput.setAttribute('type', 'password');
  passInput.classList.add('loginInput');
  passInput.textContent = 'Password';
  const createButton = document.createElement('button');
  createButton.classList.add('loginButton');
  createButton.textContent = 'Crear';
  createButton.addEventListener('click', () => {
    document.write(createUser(registerInput.value, passInput.value));
    createUser(registerInput.value, passInput.value);
    createProfile(userName.value, userLastName.value);
  });
  accountButtons.append(startLogo, registerInput, passInput, accountForm, createButton);
  accountForm.append(labelName, userName, labelLastName, userLastName, registerInput, passInput);
  return accountButtons;
}
export { account };
