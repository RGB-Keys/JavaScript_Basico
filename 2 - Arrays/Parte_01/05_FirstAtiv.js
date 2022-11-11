// Array vazia:

const arrayVazia = [];

console.log(" ")

console.log(arrayVazia);
console.log(arrayVazia.length);

console.log(" ")

// O JavaScript criou a array e guardou na const arrayVazia,
//mas seu length é 0.
console.log(" ")

console.log(arrayVazia[0]);

console.log(" ")

// Utilizando um console.log no índice 0 (visto que ele não possui nenhum elemento)
//ele nos retorna o valor "undefined".

// Acrescentando vírgulas(,) para simular outros elementos na array
//vemos o que acontece:

console.log(" ")

const arrayVazia1 = [,,,];
console.log(arrayVazia1.length);
console.log(arrayVazia1[0]);
console.log(arrayVazia1[1]);
console.log(arrayVazia1[2]);

console.log(" ")

// É interessante pensar que esta array é como um gaveteiro com
//três espaços que se encontram "vazios", sem nenhum valor de dado
//guardado.

// Desta vez, para finalizar o teste. Usaremos o push() para adicionar
//um valor no final da array.

console.log(arrayVazia1.length)
arrayVazia1.push(50);
console.log(arrayVazia1);
console.log(arrayVazia1.length)

// O JavaScript manteve os espaços vazios e adicionou o elemento 50
//ao final na array com um novo índice.

// Após o acrescimo deste novo elemento, o .length nos retorna como
//4 posições, o que só comprova que ele não removeu ou utilizou os espaços
//vazios.

// Chama-se este tipo de estrutura de 'array esparso' e é importante lembrar
//deste comportamento dos arrays em JavaScript.