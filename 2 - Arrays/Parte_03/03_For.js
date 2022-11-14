// Uso do laço de repetição for(let i, i, i);

// Imprima o indice que vai de 100 + 100, até 600;

// Podermos fazer da seguinte forma:

console.log("Laço de repetição for: ")

for(let indice = 100; indice < 700; indice += 100) {
    console.log(indice);
}

console.log(" ");

// Se pensarmos numa estrutura de For clássico, sem que tivessemos
//uma array, poderia ser feito deste jeito.

// Mas tendo uma array, podemos fazer assim:

console.log("Array com laço de repetição for: ")

const numeros = [100, 200, 300, 400, 500, 600];

console.log(numeros)
console.log(" ");

for(let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}

console.log(" ");

// Na estrutura for, somos responsáveis por criar uma variável de controle,
//modificá-la ao final de cada iteração e estabelecer uma condição de execução adequada.