import { deepMerge } from './deepMerge';

describe('deepMerge', () => {
  it('should merge two objects', () => {
    const target = { a: 1, b: 2 };
    const source = { c: 3, d: 4 };

    expect(deepMerge(target, source)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  it('should merge two objects with nested objects', () => {
    const target = { a: 1, b: 2 };
    const source = { c: 3, d: 4, e: { f: 5 } };

    expect(deepMerge(target, source)).toEqual({
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: { f: 5 },
    });
  });

  it('should merge two objects with arrays', () => {
    const target = { a: [1], b: [2] };
    const source = { c: [3], d: [4] };

    expect(deepMerge(target, source)).toEqual({
      a: [1],
      b: [2],
      c: [3],
      d: [4],
    });
  });

  it('should return the source if no target is provided', () => {
    const source = { c: 3 };

    expect(deepMerge(undefined, source)).toEqual({ c: 3 });
  });

  it('should return the target if no source is provided', () => {
    const target = { a: 1 };

    expect(deepMerge(target, undefined)).toEqual({ a: 1 });
  });

  it('should overwrite the value of the same key in the target object with the value of the same key in the source object', () => {
    const target = { a: 1 };
    const source = { a: 2 };

    expect(deepMerge(target, source)).toEqual({ a: 2 });
  });
});
