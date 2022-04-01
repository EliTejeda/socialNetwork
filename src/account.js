import { createUser, createProfile} from './fbConfig.js'; //eslint-disable-line
import { post } from './post.js'; //eslint-disable-line
import { onNavigate } from './main.js'; //eslint-disable-line
// eslint-disable-next-line import/no-cycle

function account() {
  const accountButtons = document.createElement('div');
  accountButtons.classList.add('startContaineraccount');
  const topInfo = document.createElement('section');
  topInfo.classList.add('topInfo');
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
  const accountContainer = document.createElement('div');
  accountContainer.classList.add('accountContainer');
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
  registerInput.setAttribute('placeholder', 'Correo');
  registerInput.textContent = 'Usuario';
  registerInput.setAttribute('id', 'labelName');
  const passInput = document.createElement('input');
  passInput.setAttribute('placeholder', 'Contraseña');
  passInput.setAttribute('id', 'password');
  passInput.setAttribute('type', 'password');
  passInput.classList.add('loginInput');
  passInput.textContent = 'Password';
  const createButton = document.createElement('button');
  createButton.classList.add('loginButton');
  createButton.textContent = 'Crear';
  createButton.addEventListener('click', () => {
    document.write(createUser(registerInput.value, passInput.value));
    createProfile(userName.value, userLastName.value, registerInput.value);
    createUser(registerInput.value, passInput.value, userName.value);
  });
  topInfo.append(titleTop, returnstartIcon);
  accountForm.append(labelName, userName, labelLastName, userLastName, registerInput, passInput, createButton);//eslint-disable-line
  accountContainer.append(accountForm);
  accountButtons.append(topInfo, startLogo, accountContainer);
  return accountButtons;
}
export { account };
