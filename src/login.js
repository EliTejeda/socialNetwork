function login() {
  const loginButtons = document.createElement('div');
  loginButtons.innerHTML = `
  <div class ="startContainer">
  <div class ="logoContainer">
  <img class= "logoMuñe" src="./assets/mochilerox.svg" alt="Logo de paseito, muñeca con mochila">
  </div>
  <div class= "inputsContainer">
  <p class="loginText">Ingresa tus datos:</p>
  <input type = 'text'  name= 'userName' id= 'user' class='loginInput' placeholder="Correo electrónico">
  <input type = 'text'  name= 'password' id= 'password' class='loginInput'placeholder="contraseña">
  <button onclick="onNavigate('/start'); return false;" class="loginButton">Ingresar</button>
  <p class="loginText">Loguearse con:</p>
  <button onclick="onNavigate('/start'); return false;" class="loginButton">Gmail</button>
  <button onclick="onNavigate('/start'); return false;" class="loginButton">Facebook</button>
  </div>
  </div>`;
  return loginButtons.innerHTML;
}

export { login };
