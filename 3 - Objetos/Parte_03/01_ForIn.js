// Uso do método For...in:

// O uso deste método é interessante quando queremos iterar
//dentro de um objeto.

// Utilizando do mesmo exemplo da aula anterior, podemos observar
//um objeto "cliente" com seus dados, porém, é preciso compreender
//que diferente de uma array que possui seus "índices", neste caso
//os objetos não funcionam desta maneira.

// Se quisermos listar estes dados na tela com seus respectivos valores
//como fazemos com as arrays, podemos usar o For..in:

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
}];

///////////----------------////////////

// Dentro dos parêntese é criado uma variável que fica responsável]
//por representar cada dado e também valor (uso do []).

console.log(" ");
console.log("Uso do For...in apenas com as chaves: ")
console.log(" ");

for (let chave in cliente) {
    console.log(chave);
    console.log(" ");
}

///////////----------------////////////

// Neste caso, percebe-se que o nome do objeto foi específicado
//e a variável criada "chave" foi posta dentro de colchetes.

// Atraveś disso, o JavaScript entende que você deseja se referir
//apenas aos valores encontrados em cada chave.

console.log(" ");
console.log("Uso do For...in apenas com os valores: ")
console.log(" ");

for (let chave in cliente) {
    console.log(cliente[chave]);
    console.log(" ");
}

///////////----------------////////////

// Este caso é bem interessante, porque através do uso de 
//template strings conseguimos formar uma frase que contém
//as chaves e seus respectivos valores sem fazer um código
//tão elaborado.

// O próprio For...in entende esse sequenciamento e faz de maneira
//automática. Lembrando alguns dos outros For.

console.log(" ");
console.log("Uso do For...in com as chaves e os valores: ")
console.log(" ");

for (let chave in cliente) {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
    console.log(" ");
}

///////////----------------////////////

// Agora temos o uso do condicional If para separarmos algumas
//informações.

// Neste caso, apenas queremos que o For..in nos forneça as chaves e
//valores que sejam diferentes de "objetos" e "funções".

// Por esta razão, a chave "enderecos" e seus valores não aparecem.

console.log(" ");
console.log("Uso do For...in com as chaves e os valores + Uso de condicional: ")
console.log(" ");

for (let chave in cliente) {
    let tipo = typeof cliente[chave];

    if(tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
        console.log(" ");
    }
}

///////////----------------////////////

// Exercício:

const paciente = {
    nome: "James T.",
    idade:30,
    email: "jt@email.com",
    identicacao: "Alpha01259859",
    funcao:"comandante",
    peso:80.1,
    altura:1.80,
    calcularIMC:function(){
          return (this.peso/(Math.pow(this.altura,2)))
    },
    nomeCompleto:function(){
      console.log(this.nome)
    }
}

let dados = "";
for (let info in paciente) {
if (typeof paciente[info] === "object" || typeof paciente[info] === "function") {
  continue
} else {
 console.log(dados += `${info} ==> ${paciente[info]}
 `)}
};

for (let info in paciente) {
    console.log(info)
   };