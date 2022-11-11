// O que são Arrays?

// É um tipo de Estrutura de Dados.

// Uma lista ordenada de valores enumerados em que cada valor é
//chamado de "elemento" ou "item", e cada elemento se localiza numa
//posição na lista chamada de índice.

// Índice = index.

// Usada para agrupar diversos dados que têm relação entre si.

// Fazendo um código simples de média, podemos trabalhar com as arrays logo após.

const nota1 = 10;
const nota2 = 9;
const nota3 = 6;
const nota4 = 8;

const resultado = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("Sem uso da Array: ")
console.log(" ")
console.log(`Média: ${resultado}`) // Média = 8.25
console.log(" ")

// Observa-se que é um código funcional. Mas se tivessem mais notas, como trabalhar e escrever cada uma delas?
// Daria muito trabalho, mas podemos facilitar com o uso de arrays.

const notas = [10, 9, 6, 8];

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log("Uso da Array: ")
console.log(" ")
console.log(`Média: ${media}`) // Média = 8.25
console.log(" ")

// O length aparece se referindo a quantidade de valores (dados) contidos na array.

// Ambas dão o mesmo resultado, porém, o uso da array economiza tempo e também nos ajuda a manter nosso código organizado e limpo.

// Também podemos buscar um valor dentro de um índice da array:

console.log("Uso da Array: (Buscar valor no índice 2) ")
console.log(" ")
console.log("Valor: " + notas[2]) // valor: 6