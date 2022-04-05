/**
 * @jest-environment jsdom
 */
import { createUser } from '../../src/lib/fbConfig.js';

jest.mock('../../src/lib/firebaseConfig.js');

describe('createUser', () => {
  it('must be a function', () => {
    expect(typeof createUser).toBe('function');
  });
});
