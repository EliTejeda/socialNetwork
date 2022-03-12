function login() {
  const rootDiv = document.getElementById('root'); /*elemento que tiene el id root en html*///eslint-disable-line
  const loginButtons = document.createElement('div');
  loginButtons.classList.add('startContainer');
  loginButtons.innerHTML = `
  <img class= "logoMuñe" src="./assets/mochilerox.svg" alt="Logo de paseito, muñeca con mochila">
  <input type = 'text'  name= 'userName' id= 'user' class='loginInput'>
  <input type = 'text'  name= 'password' id= 'password' class='loginInput'>
  <button onclick="onNavigate('/start'), start(); return false;" class="loginButton">Ingresar</button>
  <button onclick="onNavigate('/start'), start(); return false;" class="loginButton">Gmail</button>
  <button onclick="onNavigate('/start'), start(); return false;" class="loginButton">Facebook</button>`;
  rootDiv.appendChild(loginButtons);
}
window.login = login;
export { login };
