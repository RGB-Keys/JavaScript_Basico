// Quinta Atividade:

// Uso do reduce para reduzir uma lista de números em um 
//único valor.

// Exemplo 1:

const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acc, atual) => atual + acc, 0)

console.log(soma) //170

// É importante notar que:

// O método reduce() está trabalhando com dois parâmetros. O primeiro é a função callback obrigatória
//para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial do acumulador – no caso, 0.

// A função callback foi escrita diretamente dentro do reduce(), e esta função também está recebendo dois parâmetros,
//ambos obrigatórios: o valor acumulado e o valor atual.

// A função callback foi escrita na forma de arrow function; nesse caso, quando só temos uma linha de instrução dentro
//da função (atual + acc) não precisamos usar chaves e nem da palavra-chave return.

// Caso você tenha mais de uma linha de instrução dentro de uma arrow function, as chaves {} e a palavra-chave return voltam a ser necessários.



// Exemplo 2:

const soma2 = numeros.reduce(function (acc, atual) {
    return atual + acc
}, 0)

console.log(soma) //170

// Vendo o código acima, percebe-se melhor onde começam e terminam cada um dos parâmetros do reduce():
// o primeiro parâmetro, uma função e o segundo, um número.



// Exemplo 3:

function operacaoNumerica(acc, atual) {
    return atual + acc
}
   
const soma3 = numeros.reduce(operacaoNumerica, 0)

console.log(soma3) //170

// O reduce() roda o loop no array “por baixo dos panos”, executando para cada elemento a instrução passada na função operacaoNumerica.


// É importante lembrar que cada método pode aceitar receber parâmetros diferentes! Alguns são obrigatórios, outros opcionais.
