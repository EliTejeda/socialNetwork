function account() {
  const rootDiv = document.getElementById('root'); /*elemento que tiene el id root en html*///eslint-disable-line
  const startButtons = document.createElement('div');
  startButtons.innerHTML = `
  <inp
  <button onclick="onNavigate('/login'); return false;" class="button">Login</button>
    <button onclick="onNavigate('/account'); return false;" class="button">Account</button>`;
  rootDiv.appendChild(startButtons);
}
export { account };
