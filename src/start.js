function start() {
    const rootDiv = document.getElementById('root'); /*elemento que tiene el id root en html*///eslint-disable-line
  const startButtons = document.createElement('div');
  startButtons.classList.add('startContainer');
  startButtons.innerHTML = `
  <img class= "logoMuñe" src="./assets/mochilerox.svg" alt="Logo de paseito, muñeca con mochila">

  <button onclick="onNavigate('/login'), login(); return false;" class="loginButton">Login</button>
  <button onclick="onNavigate('/account'), account(); return false;" class="loginButton">Account</button>`;
  rootDiv.appendChild(startButtons);
}
window.start = start;
export { start };
