// Um objeto que contém objetos:

// É possível guardar objetos dentro de um objeto, segue o exemplo abaixo:

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

console.log("Dados do cliente: ");
console.log(cliente);
console.log(" ");
  
cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
};
  
console.log("Objeto criado (endereço) e inserido no objeto (cliente): ");
console.log(cliente.endereco);
console.log(" ");

console.log("Dados do cliente + objeto inserido (endereço): ");
console.log(cliente);
console.log(" ");
