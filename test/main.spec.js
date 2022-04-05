import {
  onNavigate,
  simiRoutes,
  start,
  login,
  account,
  post,
} from '../src/routes/main.js';

jest.mock('../src/routes/main.js');

describe('onNavigate', () => {
  it('must be a function', () => {
    expect(typeof onNavigate).toBe('function');
  });

  test('it should render start', () => {
    document.body.innerHTML = '<div id="root"></div>';
    onNavigate('/', simiRoutes);
    const rootDiv = document.getElementById('root');
    expect(rootDiv.textContent).toEqual('Paseitos');
  });

});
