function start() {
    // const rootDiv = document.getElementById('root'); /*elemento que tiene el id root en html*///eslint-disable-line
  const startButtons = document.createElement('div');
  startButtons.innerHTML = `
  <button onclick="onNavigate('/login'); return false;" class="button">Login</button>
    <button onclick="onNavigate('/account'); return false;" class="button">Account</button>`;
  return startButtons.innerHTML;
}
export { start };
