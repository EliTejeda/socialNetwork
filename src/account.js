function account() {
  const rootDiv = document.getElementById('root'); /elemento que tiene el id root en html///eslint-disable-line
  const accountButtons = document.createElement('div');
  accountButtons.classList.add('startContainer');
  accountButtons.innerHTML = `
  <img class= "logoMuñe" src="./assets/mochilerox.svg" alt="Logo de paseito, muñeca con mochila">
  <input type = 'text'  name= 'userName' id= 'userName' class= 'loginInput'>
  <input type = 'text'  name= 'userEmail' id= 'userEmail' class= 'loginInput'>
  <input type = 'text'  name= 'user' id= 'user' class= 'loginInput'>
  <input type = 'text'  name= 'password' id= 'password' class= 'loginInput'>
  <input type = 'text'  name= 'register' id= 'register' class= 'loginInput'>
  <button onclick="onNavigate('/start'), start(); return false;" class="loginButton">Registrarse</button>`;

  rootDiv.appendChild(accountButtons);
}
window.account = account;
export { account };
