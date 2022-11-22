// O que são objetos?

// Já em alguns momentos, foi mostrado o uso de objetos. Mas tomando como exemplo vamos
//fazer uma lista com números de cpf através de uma array e logo em seguido os dados das
//pessoas deste cpf.

const listaCPF = [111111, 55555, 666666];

const dadosPessoa = ["nome", "Paulo", "idade", 23];

// Percebe-se que para este tipo de situação, as arrays não são bem indicadas. Pois as informações
//estão dispersas e fica difícil o entedimento da conexão entre eles.

// Para isso, podemos criar um objeto que facilitará o entendimento.

const objDadosPessoas = { 
    nome: "Ricardo",
    idade: 25,
    cpf: "5555555555555",
    profissão: "Pedreiro",
}

// Desta forma, é mais fácil guardar estas informações e mantê-las conectadas.

// Cada objeto possui chaves e cada chave possui os seus valores.