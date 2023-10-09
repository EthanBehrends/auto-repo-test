
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
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
