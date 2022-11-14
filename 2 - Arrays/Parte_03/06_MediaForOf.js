// Uso do for of para calcular medias de alunos:

// Diferente do For clássico, este For of tem uma
//estrutura mais direta e bem interessante para se usar em
//arrays.

// Pois ao declará-lo, ele pega todos elementos dentro de uma array.

// Portanto, segue o exemplo:

const notas = [10, 6.5, 8, 7.5];

let soma = 0;

for(let nota of notas) {
    soma += nota;
}

const media = soma / notas.length;

console.log(`A média do aluno é: ${media}.`);

// Percebe-se que com o uso do For of, não foi necessário
//fazer todo o sistema de repetição que se faz no for clássico.

// Ao percorrer um array com o for of,
//sempre passamos por todos os elementos,
//do primeiro até o último.
