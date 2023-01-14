// Uso do JSON.stringify e do JSON.parse:

// Pegando o mesmo código que está em "02_Leitura.js"
//será aplicado dois processos:

// 1 - Stringificação

// Se trata de transformar este objeto que está no arquivo JSON
//em uma String.

const dados = require("./02_Aplicacao.json");

console.log(dados);
console.log(typeof dados);

const clienteEmStrig = JSON.stringify(dados);

console.log(clienteEmStrig);
console.log(typeof clienteEmStrig);

// O uso do Stringify fez com que todo aquele objeto passasse
//a ser uma String, tanto que se utilizarmos o typeof ele indicará
//ser uma String.


// 2 - Transformar String em Objeto

// Agora faremos o processo ao contrário, pegando a variável
//onde está contido o JSON em String e transformando-o novamente
//em objeto.

const stringToObject = JSON.parse(clienteEmStrig);

console.log(stringToObject);
console.log(typeof stringToObject);

// Isso é bem útil, pois veremos muitos JSON como String.
