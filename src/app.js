const routes = {
  '/login': login,
  '/account': account,
  '/start': start
};
const rootSon = document.createElement('div');
rootSon.innerHTML = routes[window.location.pathname];
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  rootSon.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootSon.innerHTML = routes[window.location.pathname]
};
document.getElementById('root').appendChild(rootSon);
