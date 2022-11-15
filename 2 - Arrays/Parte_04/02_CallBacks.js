// Alguns modos de utilizar as funções Callbacks:

const nomes = ["Evaldo", "Mari", "Camis"];

// 1°:

console.log("Uso do forEach() e ter como parâmetro Function(): ");

nomes.forEach(function (nome) {
  console.log(nome);
});

console.log(" ");

// 2°:
console.log("Uso do forEach() e ter como parâmetro ArrowFunction(): ");

nomes.forEach(nome => {
    console.log(nome);
})

console.log(" ");

// 3°:

console.log("Criação de Function e ao final declaração de forEach(): ");

function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);