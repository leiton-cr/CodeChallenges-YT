const n = 372;

armstrong = (n) => {
    const len = n.toString().length
    const sum = n.toString().split("").reduce((sum,i) => sum+=Math.pow(i,len),0);
    return sum;
}

console.log(armstrong(n) === n);