// Uso do for em uma operação de média:

// Anteriormente, tinhamos feito um código voltado para
//calcular a média de um aluno.

// Desta vez usaremos o for para refatorar aquele código.

const notas = [10, 6.5, 8, 7.5];

let soma = 0;

for(let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

const media = soma / notas.length;

console.log(`A média do aluno é: ${media}.`);