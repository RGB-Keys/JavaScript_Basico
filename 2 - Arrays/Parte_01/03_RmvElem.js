// Removendo Elementos:

// No exercício anterior utilizamos o push() para adicionar um elemento
//dentro de uma array.

// Agora utilizaremos o pop() para remover um elemento.

const notas = [10, 6, 8, 7, 10];
console.log("Notas antes da utilização do pop(): ")
console.log(notas);
console.log(" ");

notas.pop();
console.log("Utilização do pop() para remoção do último elemento: ")
console.log(notas);
console.log(" ");

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`A média do aluno é: ${media}`);

// É importante destacar que não foi colocada nada como parâmetro
//no pop().