// Adicionando Elementos:

// É possível inserir elementos dentro de uma array já criada
//mesmo ela sendo uma constante. Podemos utilizar o método push().


const notas = [10, 8, 7]; // -> Falta o índice 3 ser inserido.

console.log("Array faltando um elemento para ser inserido: ")
console.log(notas);
console.log(" ");

// Nota-se que falta uma nota para descobrirmos a média.

// Para resolver esta situação utilizaremos o push() para colocar
//mais um elemento dentro da array.

notas.push(9);

console.log("Método 'push' sendo utilizado para inserir o elemento '9': ")
console.log(notas);
console.log(" ");

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`A média do aluno é: ${media}`);