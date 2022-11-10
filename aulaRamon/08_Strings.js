// OBJETO STRINGS:

// Em alguns casos precisaremos converter alguma variável para o tipo String.
// No JavaScript podemos fazer da seguinte forma:

const numero = 256;
const convertidoEmString = new String(numero);

// Se usarmos um console.log(), notamos a conversão:

console.log("* - New String(variável): ")

console.log(" ")

console.log("Sem conversão: ")
console.log(numero)

console.log(" ")

console.log("Com conversão: ")
console.log(convertidoEmString)

console.log(" ")

// Também é possível outros tipos primitivos (Números, Booleanos) em strings
//através do método toString():


const num = 500;

console.log(" * - variável.toString(): ")

console.log(" ")

console.log("Sem conversão: ")
console.log(num)

console.log(" ")

console.log("Com conversão: ")
console.log(num.toString()) // -> Converte para '500' (String), sua coloração passa a ser cinza.

console.log(" ")

// CONCATENANDO STRINGS:

// Concatenar = juntar duas ou mais strings.

console.log("* - Concatenação (Juntar Strings): ")
console.log(" Uso de + ou += ")

console.log(" ")

let nome = "André";
let sobreNome = "Silva";
let nomeCompleto = "Meu nome completo é: " + nome + " " + sobreNome;

console.log(nomeCompleto)

console.log(" ")

// Para melhorar o código, podemos utilizar o operador +=

let saudacoes = "Seja bem-vindo ";
saudacoes += nome;

console.log(saudacoes)

console.log(" ")


// INTERPOLANDO STRINGS (TEMPLATE STRINGS):

// No JavaScript, é uma alternativa mais prática para manipular string sem
//a necessidade de fazer concatenação, porque para textos maiores, concatenar
//pode ser um pouco trabalhoso. Sem contar que pode ficar um código sujo!

// As template strings tornam mais flexível o trabalho com as strings, além de facilitar
//a escrita e leitura do código.

console.log("* - Interpolando Strings (Template Strings): ")
console.log(" Uso de `` e '${}' ")

console.log(" ")

saudacoes = `Seja bem-vindo ${nome}`;
console.log(saudacoes)

console.log(" ")

let poema = `
   E agora, ${nome}?
   A festa acabou,
   a luz apagou,
   o povo sumiu,
   a noite esfriou,
   e agora, ${nome}?
   e agora, você?
   você que é sem nome,
   que zomba dos outros,
   você que faz versos,
   que ama, protesta?
   e agora, ${nome}?
`
console.log(poema)