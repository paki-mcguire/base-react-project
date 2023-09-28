// sum.test.ts
import { expect, describe, test } from 'vitest';
import { sum } from './sum';

describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  // Add more test cases here if needed
});
