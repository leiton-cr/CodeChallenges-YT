const word = "arrora"

const palindrome = (word) => {
    const len = word.length-1;
    
    for (let i = 0; i < (len)/2; i++) {
        if(word[i]!== word[len-i]) return false;
    }

    return true;
}

console.log(palindrome(word));