/* /**
 * @jest-environment jsdom
 */

import {
  onNavigate,
} from '../src/routes/main.js';

jest.mock('../src/routes/main.js');

const start = () => {
  const startButtons = document.createElement('p');
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

const simiRoutes = { //eslint-disable-line
  '/': start,
  '/login': login,
  '/account': account,
  '/post': post,
};

describe('onNavigate', () => {
  it('must be a function', () => {
    expect(typeof onNavigate).toBe('function');
  });

  test('it should render start', () => {
    const simiRoutes = { //eslint-disable-line
      '/': start,
      '/login': login,
      '/account': account,
      '/post': post,
    };
    onNavigate('/');
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    expect(rootDiv.textContent).toEqual('');
  });
});
