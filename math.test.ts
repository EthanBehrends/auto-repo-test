
import { add, subtract, multiply, divide } from './math';

describe('Math functions', () => {
    test('add', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('subtract', () => {
        expect(subtract(5, 2)).toBe(3);
    });

    test('multiply', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test('divide', () => {
        expect(divide(6, 2)).toBe(3);
        expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
    });
});
