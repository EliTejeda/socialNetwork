/* const firestore = () => {
  return {
    collection: (Post) => {
      return {
        add: (objData) => {
          return new Promise((resolve) => {
            resolve('se agregó post');
          });
        },
      };
    },
  };
};

const firebase = {
firestore: firestore
}; */

export const { mockFirestore } = require('firestore-jest-mock');

mockFirestore({
  database: {
    users: [
      { Name: 'Daniel', LastName: 'Gutierrez', correo: 'dani@gmail.com' },
      { Name: 'Genesys', LastName: 'Mauries', correo: 'gene@gmail.com' },
    ],
    Post: [{ Post: 'Sus Paseitos son geniales' },
      { Post: 'Viaje al mercado de Jamaica' },
    ],
  },
});

const { mockCollection } = require('firestore-jest-mock/mocks/firestore');

test('testing stuff', () => {
  const { Firestore } = require('@google-cloud/firestore');
  const firestore = new Firestore();

  return firestore
    .collection('users')
    .get()
    .then(userDocs => {
      expect(mockCollection).toHaveBeenCalledWith('users');
      expect(userDocs[0].name).toEqual('Daniel');
    });
});
