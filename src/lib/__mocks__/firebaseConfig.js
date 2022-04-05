const collection = (db, collection) => { //eslint-disable-line
  return {};
};

const getDocs = (collection) => { //eslint-disable-line
  return Promise.revolve({});
};

const getAuth = () => { ''; };
const createUserWithEmailAndPassword = (auth, email, password) => Promise.resolve({
  0: {
    user: 'Teo Testeo',
    auth: '',
  },
});

export {
  collection,
  getDocs,
  getAuth,
  createUserWithEmailAndPassword,
};
