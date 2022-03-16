/* eslint-disable import/no-cycle */
// Este es el punto de entrada de tu aplicacion **parte dinamica**
import { start } from './start.js';
import { login } from './login.js';
import { account } from './account.js';

const routes = { /*objeto con distintas propiedades array con 3 elementos *///eslint-disable-line
  '/': start,
  '/login': login,
  '/account': account,
};

const rootDiv = document.getElementById('root');
const onNavigate = (pathname) => {  /*recibe como parametro una cadena de caracteres que se llama pathname. onNavegate nuevo estado de navegacion*///eslint-disable-line
  window.history.pushState(   /* anexa un registro a nuestro historial de navegacion, agregar un nuevo estado  */ //eslint-disable-line
    {},
    pathname,
    window.location.origin + pathname, /*el nuevo path / de las 3 pantallas *///eslint-disable-line
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {       /*actualiza url localizacion *///eslint-disable-line
  rootDiv.appendChild(routes[window.location.pathname]());
};

const component = routes[window.location.pathname];   /* al cargarse la pag por primera vez regresa al / a start *///eslint-disable-line
rootDiv.appendChild(component());

export { onNavigate };
