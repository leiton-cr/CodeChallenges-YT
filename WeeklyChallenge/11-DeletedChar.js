const str1 = "El gato pupusa lose";
const str2 = "Se que el patos";

findNotCommon = (str1, str2) => {
    return str1.split("").filter(letter => !str2.toLowerCase().includes(letter.toLowerCase()));
}

console.log(findNotCommon(str1,str2));
console.log(findNotCommon(str2,str1));