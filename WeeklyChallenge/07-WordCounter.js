const sentence = "Hola, mi nombre es brais. Mi nombre completo es Brais Moure (MoureDev)."

const normalize = (word) => {
    return word.toLowerCase().replace(/[.,!()]/g,"");
}

countWords = (sentence) => {
    const words = sentence.split(" ");
    const dict = {};

    words.forEach(word => {
        word = normalize(word);
        dict[word] ? dict[word]++ : dict[word] = 1; 
    })
    
    return dict;
}

console.log(countWords(sentence));