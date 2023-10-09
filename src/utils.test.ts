import { describe, expect, test } from '@jest/globals';

import { fibonacci } from './utils';

test('fibonacci function', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(10)).toBe(55);
});
