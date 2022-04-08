/* /**
 * @jest-environment jsdom
 */

import {
  createUser,
  authenticUser,
  loginUser,
  getName,
  logoutUser,
  createProfile,
  createPost,
  getPosts,
  deletePost,
  editPost,
  loginGoogle,
  updateLike,
  aLike,
} from '../src/lib/fbConfig.js';

jest.mock('../src/lib/firebaseConfig.js');

describe('createUser', () => {
  it('must be a function', () => {
    expect(typeof createUser).toBe('function');
  });
  it('must return Promise', () => {
    expect(createUser('eli@gmail.com', 'fds')).toEqual(Promise.resolve({}));
  });
  it('must be an Object', () => {
    expect(typeof createUser('eli@gmail.com', 'fds')).toBe('object');
  });
});

describe('authenticUser', () => {
  it('must be a function', () => {
    expect(typeof authenticUser).toBe('function');
  });
});

describe('loginUser', () => {
  it('must be a function', () => {
    expect(typeof loginUser).toBe('function');
  });
});

describe('getName', () => {
  it('must be a function', () => {
    expect(typeof getName).toBe('function');
  });
  it('must return Promise', async () => {
    expect(await getName()).toEqual({});
  });
});

describe('logoutUser', () => {
  it('must be a function', () => {
    expect(typeof logoutUser).toBe('function');
  });
});

describe('createProfile', () => {
  it('must be a function', () => {
    expect(typeof createProfile).toBe('function');
  });
  it('must return Promise', async () => {
    expect(await createProfile()).toEqual({});
  });
});

describe('createPost', () => {
  it('must be a function', () => {
    expect(typeof createPost).toBe('function');
  });
});

describe('getPosts', () => {
  it('must be a function', () => {
    expect(typeof getPosts).toBe('function');
  });
  it('must return Promise', async () => {
    expect(await getPosts()).toEqual({});
  });
});

describe('deletePost', () => {
  it('must be a function', () => {
    expect(typeof deletePost).toBe('function');
  });
});

describe('editPost', () => {
  it('must be a function', () => {
    expect(typeof editPost).toBe('function');
  });
});

describe('loginGoogle', () => {
  it('must be a function', () => {
    expect(typeof loginGoogle).toBe('function');
  });
});

describe('updateLike', () => {
  it('must be a function', () => {
    expect(typeof updateLike).toBe('function');
  });
});

describe('aLike', () => {
  it('must be a function', () => {
    expect(typeof aLike).toBe('function');
  });
});
