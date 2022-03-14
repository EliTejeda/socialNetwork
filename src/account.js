function account() {
  const accountButtons = document.createElement('div');
  accountButtons.innerHTML = `
  <div class="startContainer"><img class= "logoMuñe" src="./assets/mochilerox.svg" alt="Logo de paseito, muñeca con mochila">
  <input type = 'text'  name= 'userName' id= 'userName' class= 'loginInput'>
  <input type = 'text'  name= 'userEmail' id= 'userEmail' class= 'loginInput'>
  <input type = 'text'  name= 'user' id= 'user' class= 'loginInput'>
  <input type = 'text'  name= 'password' id= 'password' class= 'loginInput'>
  <input type = 'text'  name= 'register' id= 'register' class= 'loginInput'>
  <button onclick="onNavigate('/start'); return false;" class="loginButton">Registrarse</button></div>`;

  return accountButtons.innerHTML;
}

export { account };
