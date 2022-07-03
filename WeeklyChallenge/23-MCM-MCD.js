const mcd = (n1,n2) => {
    return (n1 == 0 || n2 == 0) ? (n1 + n2) : mcd(n2, n1 % n2)
}

const mcm = (n1,n2) => {
    return (n1 * n2) / mcd(n1, n2)
}

console.log(mcm(25,6));
console.log(mcd(25,6));