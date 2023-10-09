
test('isEven', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
});

test('isOdd', () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(3)).toBe(true);
});

test('isDivisibleByThree', () => {
    expect(isDivisibleByThree(3)).toBe(true);
    expect(isDivisibleByThree(4)).toBe(false);
});

test('fibonacci', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
});
