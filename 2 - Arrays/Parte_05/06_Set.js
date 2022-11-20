// Uso do método set:

// O Set é capaz de percorrer a array e armazenar os elementos
//sem que haja repetição.

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
console.log("Lista de nomes com repetição: ");
console.log(nomes);
console.log(" ");


//                              Classe Set
const nomesAtualizados = [...new Set(nomes)];
console.log("Lista de nomes com o uso do set(): ");
console.log(nomesAtualizados)
console.log(" ");


