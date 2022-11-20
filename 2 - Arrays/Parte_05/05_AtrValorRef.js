// Atribuição por valor ou referência

// Atribuição por valor:

let num1 = 10;
let num2 = num1;

num2 += 5;
num1 += 1;

console.log(`Num1 é ${num1}. Num2 é ${num2}`);

// Ao executar este código percebe-se que a variável let num2 = num1
//copia o valor de num1 e soma com o outro valor determinado.

// Isso acontece porque o JavaScript consegue identificar que estamos
//falando de um tipo primitivo e neste caso é comum este tipo de operação.


//Atribuição por referência:

const notas = [7, 7, 8, 9];

const novasNotas = notas;

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);

// Já neste caso, a situação é diferente. Pois a const novasNotas = notas
//ela não copia mas passam a ser a mesma coisa, ou seja, quando executa o código
//o que acontece com notas, acontece com novasNotas e vice-versa.

// Por se tratar de uma array, ela não cópia o valor mas sim a referência
//da array.