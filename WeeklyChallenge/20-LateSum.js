const n1 = 1;
const n2 = 2;
const time = 3;

const sum = async (n1, n2, time) => {
    return new Promise(res => setTimeout(() => res(n1 + n2), time * 1000))
}

sum(n1, n2, time).then(console.log);