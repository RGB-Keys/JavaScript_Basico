// Uso do Find juntamento com o JSON:

// Neste exercício usamos uma lista composta de vários usuários
//com seus repectivos dados. 

// Utilizando métodos de array e Strings, faremos uma busca por alguém
//desta lista.

const clientes = require("./00_Lista.json");

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Kirby");

const encontrado2 = encontrar(clientes, "telefone", "1918820860");

console.log(encontrado);
console.log(encontrado2);

// Como pode observar, o "require" foi usado para referênciar a
//lista que está em JSON.

// Logo em seguida, foi feita uma função para fazermos esta busca.

// A função é composta de três argumentos:

// * - Lista:
//      Neste argumento estará o lugar de onde queremos fazer a busca;
// * - Chave:
//      Como o próprio nome já diz aqui fica a chave;
// * - Valor:
//      Argumento final, neste escolhemos o valor que já sabemos que está na lista;

// Quando todos os argumentos estão de acordo, receberemos todos os dados daquilo que especificamos.