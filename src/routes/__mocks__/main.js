const onNavigate = () => '';

const start = () => {
  const startButtons = document.createElement('div');
  startButtons.innerHTML = 'Paseitos';

  return startButtons;
};

const login = () => {
  const loginButtons = document.createElement('div');
  loginButtons.innerHTML = 'ya entramos';
  return loginButtons;
};

const account = () => {
  const accountButtons = document.createElement('div');
  accountButtons.innerHTML = 'ya te registraste';
  return accountButtons;
};

const post = () => {
  const postLayout = document.createElement('div');
  postLayout.innerHTML = 'vemos Post';
  return postLayout;
};

const simiRoutes = {
  '/': start,
  '/login': login,
  '/account': account,
  '/post': post,
};

export {
  onNavigate,
  simiRoutes,
  start,
  login,
  account,
  post,
};
