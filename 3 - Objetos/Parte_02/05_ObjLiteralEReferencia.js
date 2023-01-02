// Objeto Literal e Referência:

// Objeto literal:
//Ex:

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}

// O objeto literal é aquele criado com a notação literal
//ou seja, uma lista de chave e valores dentro de chaves {},
//que atribuímos a uma varável para que o valor possa ser
//acessado depois.

// Objetos literais funcionam bem quando queremos ter um objeto
//único com seu próprios dados.



// Referência:
//Ex:

const objPersonagem2 = objPersonagem
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(" ");
console.log("Demonstração do Comportamente de referência em objetos: ")
console.log(" ");

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(" ");
console.log(objPersonagem2.nome) //Gandalf, o Cinzento
console.log(" ");

console.log(" ");

// A variável objPersonagem2 não fez uma cópia do objeto original,
//apenas serviu de referência para o objeto original. Assim, qualquer
//alteração em qualquer um dos objetos altera ambos.

// Isso porque o Javascript, quando trabalha com objetos, acessa
//os valores deles fazendo referência ao original. Mas não cria uma
//cópia.



// Já o acesso por cópria funciona com tipos primitivos:
// String, Number, Booleano, Null e Symbol.

let num = 50
let num2 = num

num2 = 100

console.log(" ");
console.log("Exemplo de Cópia com Number: ")
console.log(" ");

console.log(" ");
console.log(num) //50
console.log(" ");
console.log(num2) //100
console.log(" ");

// Para contonar este comportamento automatico de referência
//bastar utilizar o método Object.create():
//Ex:

const objPersonagem3 = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}
   
const objPersonagem4 = Object.create(objPersonagem3)
objPersonagem4.nome = "Gandalf, o Cinzento"

console.log(" ");
console.log("Uso do Object.create(): ")
console.log(" ");

console.log(" ");
console.log(objPersonagem3.nome) //Gandalf
console.log(" ");
console.log(objPersonagem4.nome) //Gandalf, o Cinzento
console.log(" ");