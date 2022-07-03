const normalize = (word) => word.toLowerCase().split("").sort().join();

const anagram = (word1, word2) => {
    /* 2 palabras iguales no son anagrama*/
    if(word1 === word2) return false;
    return normalize(word1) === normalize(word2);
}

console.log(anagram("roma","amor"));