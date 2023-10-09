
export function isEven(num: number) {
    return num % 2 === 0;
}

export function isOdd(num: number) {
    return num % 2 !== 0;
}

export function isDivisibleByThree(num: number) {
	return num % 3 === 0;
}


export function fibonacci(n: number): number {
    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}
