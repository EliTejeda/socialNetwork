function account() {
  const accountButtons = document.createElement('div');
  accountButtons.innerHTML = `
  <div class="startContainer"><img class= "logoMuñe" src="./assets/mochilerox.svg" alt="Logo de paseito, muñeca con mochila">
  <p class="loginText">Ingresa tus datos:</p>
  <input type = 'text'  name= 'userName' id= 'userName' class= 'loginInput' placeholder="Nombre completo">
  <input type = 'text'  name= 'userEmail' id= 'userEmail' class= 'loginInput' placeholder="Correo electrónico">
  <input type = 'text'  name= 'user' id= 'user' class= 'loginInput' placeholder="Usuario">
  <input type = 'text'  name= 'password' id= 'password' class= 'loginInput' placeholder="contraseña">
  <button onclick="onNavigate('/start'), start(); return false;" class="loginButton">Registrarse</button></div>`;

  return accountButtons.innerHTML;
}

export { account };
