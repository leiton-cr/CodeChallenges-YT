let n = 954;
let b = "";
while (n > 0){
    b = n%2 + b;
    n = n%2 == 0 ? n/2: (n/2) - 0.5;
}

console.log(b);