// Possibilidades para o uso do for clássico:

// Por mais que o For of tenha sido interessante o seu uso,
//o laço de repetição for não fica para trás, ainda que seja
//mais complexo, ele nos possibilita vários usos.

// Por exemplo, podemos percorrer um array do fim ao início:

const numeros = [100, 200, 300, 400, 500, 600];
console.log("Array: ")
console.log(numeros);
console.log(" ");

console.log("///////////////////////////////////");

console.log(" ");

console.log("Arrays de trás para frente: ")

for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(numeros[i]);
  }

console.log(" ");

console.log("///////////////////////////////////");

console.log(" ");

// Alterar a Quantidade Incrementada ou Decrementada:

// i -= 2

console.log("Array com Decremento 'i -= 2': ")

for (let i = numeros.length - 1; i >= 0; i -= 2) {
  console.log(numeros[i]);
}

console.log(" ");

console.log("///////////////////////////////////");

console.log(" ");

// Mudança de condição:

// Condição -> numeros[i] > 300;

console.log("Array com condição -> numeros[i] > 300: ")

for (let i = numeros.length - 1; numeros[i] >= 300; i -= 2) {
  console.log(numeros[i]);
}

console.log(" ");

console.log("///////////////////////////////////");

console.log(" ");

// Criar uma array com todos o números pares de 0 a 100:

// Array = [];

const numerosPares = [];

console.log("Array que será criada apenas com números pares: ")

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);

console.log(" ");



