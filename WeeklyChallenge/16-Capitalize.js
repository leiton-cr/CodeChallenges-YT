let sentence = "hola mundo loco y poco";

sentence = sentence.replace( /(\b[a-z](?!\s))/g, x=>x.toLocaleUpperCase());

console.log(sentence);