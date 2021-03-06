/* eslint-disable import/no-cycle */
// Este es el punto de entrada de tu aplicacion *parte dinamica*
import { start } from '../views/start.js';
import { login } from '../views/login.js';
import { account } from '../views/account.js';
import { post } from '../views/post.js';

const routes = { /*objeto con distintas propiedades *///eslint-disable-line
  '/': start,
  '/login': login,
  '/account': account,
  '/post': post,
};

const rootDiv = document.getElementById('root');
const onNavigate = (pathname) => {
  window.history.pushState(            /* anexa un registro a nuestro historial de navegacion  */ //eslint-disable-line
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {       /*actualiza url localizacion *///eslint-disable-line
  rootDiv.appendChild(routes[window.location.pathname]());
};
const component = routes[window.location.pathname];

window.onload = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(component());
};
export { onNavigate };
