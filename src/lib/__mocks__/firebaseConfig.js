const collection = (db, collection) => { //eslint-disable-line
  return {};
};

const getDocs = (collection) => { //eslint-disable-line
  return Promise.resolve({});
};
const query = () => Promise.resolve({});
const where = () => Promise.resolve({});
const initializeApp = () => Promise.resolve({});
const getFirestore = () => Promise.resolve({});//eslint-disable-line
const getAuth = () => Promise.resolve({});//eslint-disable-line
const onAuthStateChanged = () => Promise.resolve({});
const createUserWithEmailAndPassword = () => Promise.resolve({});
const addDoc = () => Promise.resolve({});

export {
  collection,
  getDocs,
  addDoc,
  initializeApp,
  getFirestore,
  getAuth,
  onAuthStateChanged,
  where,
  query,
  createUserWithEmailAndPassword,
};
