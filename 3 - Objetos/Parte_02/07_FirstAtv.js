// Inicialmente a criação de um objeto e de uma propriedade
//que é um array de objetos:

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

console.log("");
console.log("Criação de um objeto e uma propriedade array de objetos: ");
console.log("");

console.log(cliente.telefone);
console.log("");

// Adicionar um objeto como propriedade de um objeto já existente:

cliente.endereco = {
    rua: "Av. Beberibe",
    numero: 4010,
    apartamento: true,
    complemento: "bloco 1, N° 5",
};

console.log("");
console.log("Adicionando um objeto como propriedade de um objeto já existente: ");
console.log("");

console.log(cliente.endereco);
console.log("");

// A utilização de métodos de array numa lista de objetos: 

cliente.enderecos = [{
    rua: "R. Boarque Coelho",
    numero: 4010,
    apartamento: true,
    complemento: "bloco 1",
}];

cliente.enderecos.push(
{
    rua: "R. Buenos Aires",
    numero: 20,
    apartamento: false,
},
{
    rua: "R. Buenos Aires",
    numero: 25,
    apartamento: true,
    complemento: "bloco 3",
});

const listaApenasApartamentos = cliente.enderecos.filter(
    (enderecos) => enderecos.apartamento === true
);

console.log("");
console.log("A utilização de métodos de arrays: ");
console.log("");

console.log(listaApenasApartamentos);
console.log("");

// A criação de uma propriedade que é uma função:

console.log("");
console.log("Criação de um objeot com propriedade que é uma função: ");
console.log("");

const user = {
    nome: "João",
    idade: 25,
    email: "joao@firma.com",
    telefone: ["5555555555", "66666666666"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("");
            console.log(`Saldo insuficiente. Seu saldo: ${this.saldo}`);
            console.log("");
        } else {
            this.saldo -= valor;
            console.log("");
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
            console.log("");
        }
    }
}

console.log(user);
console.log("");

user.efetuaPagamento(25);
console.log("");