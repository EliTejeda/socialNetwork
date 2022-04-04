import { mockFirestore } from '../firestore-mock.js'

import { getName, createPost, getPosts, deletePost, editPost, updateLike, aLike } from '../src/appFunctions/firestore.js'

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});