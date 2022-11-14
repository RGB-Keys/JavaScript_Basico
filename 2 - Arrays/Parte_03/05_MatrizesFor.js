// Uso do For em matrizes:

// Usaremos a mesma ideia de calcular a media de alunos.
//Porém, dentro de uma Matriz.

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0;

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
      media += notasGerais[i][j]/notasGerais[i].length;
    }
  }

media = media/notasGerais.length
console.log(media);

// Inicialmente, cria-se a Matriz.

// Nesta Matriz, possui trẽs arrays.

// Por se tratar de uma lista de Duas dimensões (Matriz), foi
//feito dois laços de repetição for.

// Sendo o primeiro for, para indicar qual array estamos falando.
//E o segundo for, para determinar cada elemento encontrado na array
//especificada no for anterior.

// O papel da variável let "media" é servir para guardar e somar
//os valores das arrays que estarão sendo chamadas pelo laço de repetição.

// Descobrindo as médias da cada notas(nota1, nota2, nota3), temos que
//somá-las e dividir para descobrirmos a média geral.

// A média geral foi 8.