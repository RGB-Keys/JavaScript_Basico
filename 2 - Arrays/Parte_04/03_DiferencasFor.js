// Diferenças entre for, for of e forEach:

// 1 - for:

// Formas mais clássica de fazer um  laço de repetição (loop).

// É muito conveniente pois pode ser utilizado com qualquer tipo
//de iterável e é construído de forma que deixa muito claro quais
//são todas as "fases" de cada loop.

// Obs: Iterável = Além de arrays, strings, sets (conjuntos) e maps
//(mapas ou dicionários) são considerados iteráveis.
// Sequência de elementos que pode ser percorrida utilizando ferramentas
// próprias para isso.

// Exemplo: 

const lista = [1, 2, 3, 4, 5];

console.log("Array: ")
console.log(lista);
console.log(" ")

console.log("Array com for(): ")
for (let indice = 0; indice < lista.length; indice++) {
    console.log(lista[indice]); 
   }
console.log(" ");

// Percebe-se que o for deixa bem claro a variável contadora,
//condição e o incremento.

// Além disso, já é sabido que o for possui muitas possibilidades
//para seu uso.

// Exemplo: 

console.log("Array: ")
console.log(lista);
console.log(" ")

console.log("Array com for(): ")
for (let i = 0, j = 0; i < lista.length; i++, j++) {
 console.log(lista[i] + j); 
}
console.log(" ");


// 2 - for...of

// Também um laçi de repetição assim como o for, porém, um tanto diferente.

// Ainda que use a mesma palavra chave, estes possuem suas diferenças.

// Exemplo:

// const lista = [1, 2, 3, 4, 5];
let soma = 0;

for (let elemento of lista) {
 soma += elemento;
}

console.log(soma) //15

// Assim como o for ele pode ser executado utilizando qualquer tipo de iterável.

// A diferença principal e mais visível entre o for e o for...of é que o anterior
//da muito mais controle sobre de que forma o laço de repetição ocorre.

// Em contrapartida, a sintaxe siplificada e mais "legível" para pessoa faz com que o
//uso do for...of seja mais prático do que o for.


// 3 - forEach():

// Diferentemente do for e for...of, o forEach() não é um laço de repetição,
//e sim um método do objeto Array.

// No caso do forEach(), apesar da sintaxe bem diferente, podemos utilizar este
//método como o for ou o for...of, pois ele vai executar as instruções que forem
//passadas para cada elemento iterado, sem retornar nenhum dado.

// Utiliza a abordagem funcional de funções callback para executar o código
//necessário a cada elemento iterado no laço.

// Exemplo:

//const lista = [1, 2, 3, 4, 5];
//let soma = 0;

lista.forEach(numero => soma += numero);
console.log(soma) //15

// O método forEach() recebe uma função como parâmetro, e esta função por sua
//vez utiliza como parâmetro cada um dos elementos do array. 

// A lógica interna do forEach() vai manejar a iteração do primeiro ao
//último item do array e fazer com que o código definido dentro da
//função callback seja executado a cada iteração.

// O mesmo código poderia ser escrito desta forma:

lista.forEach(numero => {
    soma += numero
   });

// Ou ainda destá:

lista.forEach(function (numero) {
    soma += numero
});


// Assim, vemos que o forEach() não retorna nenhum tipo de valor
//apenas executa o que está dentro do bloco da função callback,
//assim como for e for...of.

// Porém, também não é possível modificar a forma que a iteração
//será feita (É sempre do primeiro ao último elemento da array)
//e não há forma de interromper o laço dada alguma condição, 
//como o break fucnionar para um for normal.

// Diferente dos anteriores, o forEach() não pode ser utilizado
//com qualquer iterável, apenas com arrays e também não pode ser
//utilizado de forma assíncrona.


// Recomendações para uso:

// forEach() para trabalhar com arrays da forma mais corriqueira
//- percorrendo do primeiro ao último elemento, sem alterar a 
//condição de parada, e também para manter a coesão do estilo
//quando em conjunto com outros métodos de array como map,
//filter e etc;

// for…of em caso de iteráveis (dicionários, conjuntos e
//outras estruturas de dados) ou de arrays quando for necessário
//o uso de programação assíncrona e/ou dar condições de saída do
//laço (por exemplo, com o uso de break);

// for para casos em que seja necessário manipular de forma mais
//fina as fases do laço (condição inicial, condição de parada
//e incremento).