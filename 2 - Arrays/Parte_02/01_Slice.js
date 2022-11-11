// Uso do método Slice():

// Usado para partir a array em partes que você pode alocar
//em outras arrays.

// Supondo um exemplo de uma escola, tendo como array principal
//const alunos, pois essa ficará responsável por guardar todos os
//nomes dos alunos em cada índice.
// O número de alunos é muito grande para caber em uma única sala,
//para resolver esta situação precisa-se separá-los em duas salas.

// Pensando neste caso, podemos usar o slice da seguinte maneira:

const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = alunos.slice(0,alunos.length / 2);
console.log("Sala 1: ")
console.log(sala1);
console.log(" ");

const sala2 = alunos.slice(alunos.length / 2);
console.log("Sala 2: ")
console.log(sala2);
console.log(" ");

