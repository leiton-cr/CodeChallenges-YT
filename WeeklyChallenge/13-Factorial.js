const n = 5;

factorial = (n) => {
    return (n > 1) ? n * factorial(--n) : n;
}

console.log(factorial(n));