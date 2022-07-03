const operation = "{ a * ( c + d ) ] - 5 }";

const OPEN = "[{(";
const CLOSE = "]})";

const isEquilibrated = (operation) => {
    const operators = operation.split('').filter((e) => e.match(/[{}()\[\]]/g))
    const sequence = [];

    for (let i = 0; i < operators.length; i++) {
        if (OPEN.includes(operators[i])) sequence.unshift(operators[i]);

        if (CLOSE.includes(operators[i])) {
            if (CLOSE.indexOf(operators[i]) == OPEN.indexOf(sequence[0])) {
                sequence.shift();
            } else {
                return false;
            }
        }
    }
    return true;
}

console.log(isEquilibrated(operation));
