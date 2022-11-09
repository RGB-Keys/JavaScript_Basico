// Function padrão

function apresentar(nome) {
    return `meu nome é ${nome}`
}

// Arrow Function
// Hoisting: Também se comporta da mesma forma

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow Function com + de uma linha de instrução

const somaNumeroPequenos = (num1,num2) => {
    if (num1 > 10 || num2 > 10) {
        return `Não foi possível estes números: ${num1}, ${num2}. Somente números pequenos`;
    } else {
        return num1 + num2;
    }
}

console.log(somaNumeroPequenos(10,5))