import { createUser } from '../../src/appFunctions/firebase.js'; //eslint-disable-line

describe('createUser', () => {
  it('must be a function', () => {
    expect(typeof createUser).toBe('function');
  });
});

/*   it('must let user create profile with email:test@test.com and password:123xmi', (done) => {
    return createUser('Teo Testeo').then((data) => {//eslint-disable-line
      const callback = (createUser) => {//eslint-disable-line
        console.log(createUser);//eslint-disable-line
      };
      authenticUser(callback);
    });
  });
}); */
