// Uso do acesso com colchetes:

// Diferente do acesso com ponto, o acesso com colchetes é interessante 
//quando nós não sabemos as chaves que vamos acessar.

// Tomando como exemplo dados de uma pessoa, utilizaremos os colchetes:

const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
  };
  
  console.log(
    `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
);

// Percebe-se que a utilização não parece tão "simples" como utilizar a notação de ponto.

// Mas colocando uma situação onde não sabemos os valores das chaves, podemos fazer um código para descobrir:

const chaves = ["nome", "idade", "cpf", "email"];

// Veja que aqui temos todas as chaves encontradas no objeto cliente.
// Se tratando de uma array, podemos utilizar um método que também é um laço de repetição, o forEach().

console.log("Descobrindo os valores das chaves do objeto cliente: ");
console.log(" ");

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})

console.log(" ");

// Validando o código acima, percebe-se que ele nos fornece todos os valores
//para cada chave dentro do objeto cliente.

// O que aconteceria se colocarmos uma suposta chave que não existe no objeto cliente?

const keys = ["nome", "idade", "cpf", "email", "altura"];

console.log("Inserindo uma suposta chave que não existe no objeto cliente: ");
console.log(" ");

keys.forEach((key) => {
    console.log(`A chave ${key} tem valor ${cliente[key]}`);
})

// Nota-se que altura tem como valor undefined, pois trata-se de uma chave que não existe ou não foi declarada.