function start() {
  const startButtons = document.createElement('div');
  startButtons.innerHTML = `
  <div class="startContainer"><img class= "logoMuñe" src="./assets/mochilerox.svg" alt="Logo de paseito, muñeca con mochila">
  <button onclick="onNavigate('/login'); return false;" class="loginButton">Login</button>
  <button onclick="onNavigate('/account'); return false;" class="loginButton">Account</button></div>`;
  return startButtons.innerHTML;
}
export { start };
