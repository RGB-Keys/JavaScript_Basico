// Atividade de Concatenação, usando concat():

// Concatene de diferente formas:

// 1° forma:

// Simples:

const arrayOriginal = ["Fabio", "Ana", "Rodrigo", "Lucas"];
const arrayConcat = arrayOriginal.concat("Gabriel", "Rafael");


console.log("Array Original: ")
console.log(arrayOriginal);
console.log(" ");

console.log("Array com concat(): ")
console.log(arrayConcat);
console.log(" ");


// 2° forma:

// Mais de uma array nos parâmetros do concat();

const arrayConcat2 = arrayOriginal.concat(["Gabriel", "Rafael"], ["Gerson", "Matheus"]);

console.log("Array Original: ")
console.log(arrayOriginal);
console.log(" ");

console.log("Array com concat() e mais arrays como parâmetro: ")
console.log(arrayConcat2);
console.log(" ");


// 3° forma:

// Uma array com um elemento e uma array;

const arrayNum = [80, 90, 100];
const arrayConcat3 = arrayNum.concat([55, [60, 70]]);

console.log("Array Original: ")
console.log(arrayNum);
console.log(" ");

console.log("Array com concat() e um elemento + array: ")
console.log(arrayConcat3);
console.log(" ");