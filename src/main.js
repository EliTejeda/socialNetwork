// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { routes } from './routes.js';

myFunction();
let rootDiv = document.getElementById('root');

window.onload = function start() {
  const buttons = document.createElement('div');
  buttons.innerHTML = `<ul>
<li><a href="#" onclick="onNavigate('/about'); return false;" id="logInButton" >LogIn</a>
</li>
<li><a href="#">Register</a>
</li>
</ul>`
  rootDiv.appendChild(buttons);
};

/* const main = '../src/main.js'; */


export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  );
  rootDiv.innerHTML = routes[pathname];
};
