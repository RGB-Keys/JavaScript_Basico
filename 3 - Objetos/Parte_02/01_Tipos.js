// Chave que contém uma lista (array):

// É possível guardar mais de um valor dentro de uma chave

// Uma dessas possibilidades é transformando a chave numa array, como demonstrado no exemplo abaixo:

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};
  
console.log("Dados do cliente: ");
console.log(cliente);
console.log(" ");

console.log("Telefones do cliente: ");
console.log(cliente.telefone);
console.log(" ");