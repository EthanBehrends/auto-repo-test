

export function isEven(num) {
    return num % 2 === 0;
}

export function isOdd(num) {
    if (num === 0) {
        return false;
    }
    if (num === 1) {
        return true;
    }
    if (num === 2) {
        return false;
    }
}