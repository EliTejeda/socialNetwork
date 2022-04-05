// importamos la funcion que vamos a testear

import { createUser } from '../../src/appFunctions/fbConfig.js';
import { getAuth,createUserWithEmailAndPassword } from '../../src/lib/firebaseConfig.js';
import { onNavigate } from '../../src/routes/main.js';

jest.mock('../../src/lib/__mocks__/firebaseConfig.js');
jest.mock('../../src/routes/__mocks__/main.js');

const email = 'testeo@gmail.com'
const password = '123xmi',

describe('createUser', () => {
  it('must be a function', () => {
    expect(typeof createUser).toBe('function');
  });
  it('must create an user', () => {
    expect(createUser(getAuth(),email,password) ).toBe('Teo Testeo');
  });
});