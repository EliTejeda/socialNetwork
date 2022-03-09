// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

import { routes } from './routes';

myFunction();
const rootDiv = document.getElementById('root');

window.onload = function start() {
  rootDiv.innerHTML = `<ul>
<li><a href=""></a>
</li>
<li><a href=""></a>
</li>
</ul>
`
}