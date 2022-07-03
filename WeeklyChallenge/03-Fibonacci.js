const numbers = [0, 1];

for (i = 0; i < 50; i++) {
    console.log(numbers[i % 2]);
    numbers[i % 2] = numbers.reduce((a, b) => a + b, 0);
}