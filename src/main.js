// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { onNavigate } from './app.js';

myFunction();

document.body.onload = function () {
  onNavigate('/start');
  document.getElementById('toLogin').addEventListener('click', onNavigate('/login'));
  document.getElementById('toAccount').addEventListener('click', onNavigate('/account'));
};
