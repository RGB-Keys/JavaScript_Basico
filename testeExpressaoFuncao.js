//Principal diferença entre chamar uma função e declarar uma
//função através de uma variável.

//   HOISTING

///////////////////////////////////////////////////

console.log(minhaFuncao())

function minhaFuncao(){
    return "olá";
}

// Sucesso!!, pois uma função pode ser impressa ou chamada mesmo estando em outras posições.

///////////////////////////////////////////////////

console.log(testeConst("olá"))

const testeConst = function(param) {return param}

// Falhou!!, pois as const não permite esse tipo de flexibilidade.
// Apenas se for chamada após o código.

///////////////////////////////////////////////////
