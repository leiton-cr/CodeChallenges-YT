const str1 = "El gato pupusa lo se";
const str2 = "Se que el patos";

findCommon = (str1, str2, type) => {

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    const common1 = str1.split("").filter(letter => type ? str2.includes(letter): !str2.includes(letter));
    const common2 = str2.split("").filter(letter => type ? str1.includes(letter): !str1.includes(letter));
    return new Set([...common1,...common2])
}

console.log("Common",findCommon(str1,str2,true));
console.log("Not common",findCommon(str1,str2,false));