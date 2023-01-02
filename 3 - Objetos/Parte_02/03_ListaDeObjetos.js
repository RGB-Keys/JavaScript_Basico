// Uma lista de objetos:

// Desta vez, veremos a possibilidade de usar uma lista(array) sendo que nesta lista teremos mais objetos:

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

console.log("Dados do cliente: ");
console.log(cliente);
console.log(" ");
  
cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
}];
  
console.log("Objeto criado (endereço) e inserido no objeto (cliente) antes da lista ser criada: ");
console.log(cliente.enderecos);
console.log(" ");


cliente.enderecos.push({
    rua: "Pedro Rodrigues",
    numero: 501,
    apartamento: false,
    complemento: "casa",
})

console.log("Objeto criado (endereço) e inserido no objeto (cliente) após lista ser criada com outro endereço: ");
console.log(cliente.enderecos);
console.log(" ");

console.log("Dados do cliente + objeto inserido (endereço): ");
console.log(cliente);
console.log(" ");

console.log(" ");


// O interessante de fazer esta lista de objetos, é que agora podemos utilizar os métodos usados em arrays, ou seja,
//podemos ter várias possibilidades de uso e manipulação destas propriedades.

// Exemplo:

console.log(" ");

const listaApartamento = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log("Uso do filter na lista de objetos para obter apenas os objetos que são Apartamentos: ")
console.log(listaApartamento);
console.log(" ")