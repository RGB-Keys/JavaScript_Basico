// Uso do método map():

// Muito usado para reescrever arrays.

// Não modifica a array original, necessita da criação
//de uma variável para armazenar a modificação.

// Pode retornar um array se a função callback retornar
//algum valor.

// Não substitui o forEach().

// Exemplo: Adicionando +1 ponto para cada nota numa array.

const notas = [10, 9.5, 8, 7, 6];
console.log("Array de notas: ");
console.log(notas);
console.log(" ");

const notasAtualizadas = notas.map(nota => nota + 1 >= 10 ? 10 : nota + 1)
console.log("Array reescrita com (+ 1) utilizando map(): ");
console.log(notasAtualizadas);
console.log(" ");

// Exemplo: Deixando todos os nomes com letra maiúscula.

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];
console.log("Array de nomes: ");
console.log(nomes);
console.log(" ");


const nomesAtualizados = nomes.map(nome => nome.toUpperCase());
console.log("Array reescrita com (upperCase()) utilizando map(): ");
console.log(nomesAtualizados);
console.log(" ");



