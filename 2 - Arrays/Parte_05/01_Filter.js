// Uso do método filter():

// Como o próprio nome diz, ele serve para filtrar algo
//especifícado.

// No exemplo abaixo vemos alunos e suas notas. Onde o filter
//foi usado para descobrir se alguém reprovou.

const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
})

console.log(reprovados);

// Não foi necessário o uso de um if, pois a própria lógica
//do método permitiu um código mais direto.

// O método filter() necessita de uma variável para armazenar
//a array que está sendo modificada.

// Para o filter() funcionar, necessitou do tipo primitivo
//booleano.