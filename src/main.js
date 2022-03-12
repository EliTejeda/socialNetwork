// Este es el punto de entrada de tu aplicacion **parte dinamica**

import { myFunction } from './lib/index.js';
import { start } from './start.js';
import { login } from './login.js';
import { account } from './account.js';

const routes = { /*objeto con distintas propiedades *///eslint-disable-line
  '/login': login,
  '/account': account,
  '/start': start(),
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];
const onNavigate = (pathname) => {
  window.history.pushState(            /* anexa un registro a nuestro historial de navegacion  */ //eslint-disable-line
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
};
window.onNavigate = onNavigate; /* queda en dominio de window*/ //eslint-disable-line
window.onpopstate = () => {       /*actualiza url localizacion *///eslint-disable-line
  rootDiv.innerHTML = routes[window.location.pathname];
};

document.body.onload = () => {  /*carga las funciones a la pagina*///eslint-disable-line
  onNavigate('/start');
  start();
};
