// Quarta atividade:

// Utilize o map para multiplar os números da array por 10.

const num = [1, 2, 3, 4];
console.log("Array de números: ");
console.log(num);
console.log(" ");

function multiplicaPorDez(num) {
    return num * 10
}

console.log("Arrays com uso do map() para rescrever os elementos multiplicando-os por 10: ");
console.log(" ");

const arraySomada = num.map(multiplicaPorDez)
console.log("Array com function externa + uso do map(): ");
console.log(arraySomada)
console.log(" ");


const numMult = num.map(num => num * 10);
console.log("Array com uso do map(): ");
console.log(numMult)
console.log(" ");

// Duas maneiras foram feitas neste exercício, ambas são válidas.
//Porém, a segunda acaba sendo mais direto e rápida mas a primeira
//pode ser útil para caso precisarmos reutilizar aquele código num
//outro momento.