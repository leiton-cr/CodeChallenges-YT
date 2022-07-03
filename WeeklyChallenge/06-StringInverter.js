const word = "Hola Mundo";

const reverse = (word) => {
    const letters = word.split("");
    const len = letters.length-1
    for (let i = 0; i < len/2; i++) {   
        letters[i] = word[len-i];
        letters[len-i] = word[i];
    }

    return letters.join("");
}

console.log(reverse(word));
