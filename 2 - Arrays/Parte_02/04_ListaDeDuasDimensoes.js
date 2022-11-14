// Uso das Matrizes (Lista de Duas Dimensões):

// Podemos criar uma array que contenha outras arrays com a
//lista de duas dimensões.

// Imagine 4 alunos e cada uma possui uma nota. Inicialmente,
//faz-se uma array contendo o nome dos alunos e outra array contendo
//respectivamente, a nota de cada um.

const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
console.log("Arrays de alunos: ")
console.log(alunos);
console.log(" ");

const medias = [10, 8, 7.5, 9];
console.log("Array de Médias: ")
console.log(medias);
console.log(" ");

const listaDeAlunosEMedias = [alunos, medias];
console.log("Lista de Duas Dimensões: ")
console.log(listaDeAlunosEMedias);
console.log(" ");

console.log("Uso da Lista com o Template Strings: ")
console.log(`A aluna encontrada no índice 2 é: 
    ${listaDeAlunosEMedias[0][2]}
E sua nota é: 
    ${listaDeAlunosEMedias[1][2]}`);
console.log(" ");