// Uso do Spread Operator

// Criar uma array, sem alterar o original:

const notas = [7, 7, 8, 9];

// Estes três pontos se chama Spread Operator.
const novasNotas = [...notas];
// São versáteis e podem ser utilizados em qualquer parte do código,
//além, de aceitarem elementos ainda não colocados.

novasNotas.push(10);

console.log(`As notas originais são ${notas}`);
console.log(" ");
console.log(`AS novas notas são ${novasNotas}`);

