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

console.log(" ")

// MÉTODOS PARA STRINGS:

// O JavaScript diferencia strings como tipos primitivos (Aspas duplas ou simples)
//de objetos Strings (Quando usamos a palavra reservada new).

// Mas mesmo quando criamos de forma literal, const texto = "Alura", ela acaba sendo
//convertida para um objeto do tipo String.

// Por isso, temos acesso a uma série de métodos e propriedades deste objeto.

// * -  .length:

// Serve para informar o tamanho de uma string.

// Pode ser útil, por exemplo, para limitar a quantidade de caracteres numa senha.
// Também usada para saber a quantidade de elementos numa array.

// Exemplo simples:


console.log(".lenght")
console.log(" ")

const palavra = "Alura";
console.log(palavra.length) // 5
console.log(" ")

// Observa-se que obtemos um retorno com o número de caracteres da palavra "alura".


// * - charAT():

// Este método permite acessar um caracter de uma string.

// Vale ressaltar que Strings são arrays de caracters, e em cadea posição temos o
//caractere que compõe a string.

// Exemplo simples:

console.log("charAt()")
console.log(" ")

console.log("Alura".charAt(3)) // r
console.log(" ")

// Após a utilização e a especificação do número "3", ele retornará com o caractere
//na terceira posição da palavra "alura" que seria o "r".
// Importante lembrar que arrays começam a partir do número "0".

// Exemplo (Outra alternativa):

console.log("charAt(): Outra Alternativa")
console.log(" ")

console.log(palavra[0]) // A
console.log(" ")

// Ambas as formas são válidas


// * - indexOf():

// Serve para descobrir a posição de um caractere dentro da string

// Exemplo simples:

console.log("indexOf() ")
console.log(" ")

console.log(palavra.indexOf("a")) // 4
console.log(" ")

// É importante prestar atenção com o caractere explicitado, pois se a palavra
//tiver outro caractere igual, ele retornará o primeiro na ordem.

// O resultado da execução do IndexOf() é um valor numérico.


// * - toUpperCase() e toLowerCase:

// São duas funções bastante utilizadas quando trabalhamos com string e precisamos
//deixar todo o texto em letras minúsuclas (lowercase) ou em letrar maiúsculas (uppercase)

// Exemplo simples:

console.log("toUpperCase: ")
console.log(palavra.toUpperCase()) // ALURA
console.log(" ")

console.log("toLowerCase: ")
console.log(palavra.toLowerCase()) // alura
console.log(" ")


// * - substr():

// Permite que façamos a extração de parte de uma string.

// Exemplo simples:

console.log("substr():")
console.log(" ")

let frase = "Mergulhando em tecnologia."
console.log(frase.substr(0,11));
console.log(" ")


// * - slice():

// Método usado com arrays. Similar ao substring(), pois retorna parte de uma string.
//Desde que passemos nos parâmetros o índice de início e de fim.

// Exemplo simples:

console.log("slice():")
console.log(" ")

console.log(frase.slice(0,11));
console.log(" ")


// * - replace():

// Temos a possibilidade de substituir parte de uma string por outra.
// Essa função recebe como parâmetros duas informações: a string que você quer substituir
//e a string que será colocada no lugar

// Exemplo simples:

console.log("replace():")
console.log(" ")

let comunicacao = " Olá, sr. nomeusuario, informamos que a partir da presente data o senhor tem 50% de desconto em nossa loja."
console.log(comunicacao.replace("nomeusuario", nome))

// A string "nomeusuario" foi substituída pelo conteúdo da variável nome.

// * - concat():

// Uma opção para concatenar strings sem a utilização do operador de adição " + ".


// Exemplo simples:

console.log("concat():")
console.log(" ")

let novaString = "Programe nas principais linguagens e plataformas. Explore linguagens como ";
console.log(novaString.concat("JavaScript,").concat(" Python,").concat(" e C#."))
console.log(" ")

// * - split():

// Podemos quebrar uma string com base em caracteres separadores
//que vamos informar para o método como parâmetro.

// Array de Strings.

// Exemplo simples:

console.log("split:")
console.log(" ")

let linguagens = "JavaScript;Java;C#;PHP;Python;Go;Vb;SQL;C;C++";
let arrayLinguagens = linguagens.split(";");
console.log(arrayLinguagens);
console.log(" ")

// É importante se atentar ao usar o split(), pois a execução gerará
//como resultado um array de strings com os elementos que foram separados
//com base no separador desejado.


// * - trim():

// Remove os espaços em branco no início ou fim de uma string.
// É interessante em uma situação onde precisamos fazer uma verificação de que o
//usuário não digitou o login com espaços.

// Exemplo simples:

console.log("trim():")
console.log(" ")

let login = "   andre@emailteste.com      ";
let loginSemEspaco = login.trim();
console.log(loginSemEspaco); //andre@emailteste.com

// Na variável "loginSemEspaco" conterá uma nova string, sem os espaços em branco
//no íncio ou fim que podem ter sido digitados. Então, quando executado o método
//trim(), o resultado é uma nova string.

// Possui variações como:

// trimEnd(), trimStart(), trimLeft() e trimRight(). 
