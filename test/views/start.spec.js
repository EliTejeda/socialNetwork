import { start } from '../../src/views/start.js';

describe('start', () => {
  it('debería ser una función', () => {
    expect(typeof start()).toBe('function');
  });
  /* it('debería regresar un div', () => {
    expect(start()).toEqual('div');
  }); */
});
