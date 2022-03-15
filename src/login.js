function alertUser(){
  const user = document.getElementById('user').value;
  const passwrd = document.getElementById('password').value;
  alert(user + passwrd);
}
window.alertUser = alertUser;

function login() {
  const loginButtons = document.createElement('div');
  loginButtons.innerHTML = `
  <div class="startContainer"><img class= "logoMuñe" src="./assets/mochilerox.svg" alt="Logo de paseito, muñeca con mochila">
  <input type = 'text'  name= 'userName' id= 'user' class='loginInput'>
  <input type = 'text'  name= 'password' id= 'password' class='loginInput'>
  <button onclick="alertUser();" class="loginButton">Ingresar</button>
  <button onclick="onNavigate('/start'); return false;" class="loginButton">Gmail</button>
  <button onclick="onNavigate('/start'); return false;" class="loginButton">Facebook</button></div>`;
  return loginButtons.innerHTML;
}

export { login };
