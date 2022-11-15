// Uso do método forEach():

// Necessita de uma função:

// Essa função tem o nome de callback e
//vai ser executada para cada elemento do array,
//sendo que pode receber de 1 a 3 argumentos;
//o elemento, o índice e o array atual, respectivamente.

// O forEach é bem curioso, pois ele necessita de uma parâmetro
//e como foi visto em alguns exemplos, muitas vezes o parâmetro
//escolhido parecia não fazer sentido mas a própria lógica do
//forEach organizava a compreensão de que aquele parâemetro se refere
//aos elementos encontrados naquela determinada array.

// No exemplo abaixo, percebe-se que ele lembra um pouco o
//for of, porém, ele acaba tendo outras possibilidades de uso
//e também é bem mais usado no mercado.

const notas = [10, 6.5, 8, 7.5];

let soma = 0;

notas.forEach(function (nota, i, j) {
    soma += nota;
    console.log(i);
    console.log(j);
    console.log(j[i]);
});

const media = soma / notas.length;

console.log(`A média das notas é ${media}.`)

// forEach pegará todos os elementos:
// 1 - No primeiro parâmetro ele armazena e na função do código
//acima foi pedido para ele guardar os elementos da array no
//parâmetro "nota" e o forEach entendeu isto.

// 2 - O segundo parâmetro "i", ele passou a nos fornecer o 
//indice de cada elemento;

// 3 - O terceiro parâmetro "j", ele copiou a array.

// 4 - Quando utilizei o parâmetro "j[i]", ele entendeu que
//era para organizar o indice e o elemento de cada indice.